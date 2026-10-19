import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AppUser } from "@/lib/auth/use-current-user";
import { loadFinance, mutateFinance } from "@/lib/finance/api";
import { todayYm, type Ym } from "@/lib/finance/period";
import { PRO_THEMES, THEMES, type Bundle, type PayMethod, type ThemeId } from "@/lib/finance/types";
import type { Mutation } from "@/lib/finance/validate";
import { Onboarding } from "./onboarding";
import { Boot, Confetti, Notice } from "./ui";

export type Tab = "home" | "in" | "out" | "cards" | "monitor" | "more";

export type QuickSeed = {
  method?: PayMethod;
  text?: string;
  image?: File | null;
};

type Ctx = {
  user: AppUser;
  bundle: Bundle;
  ym: Ym;
  setYm: (ym: Ym) => void;
  tab: Tab;
  setTab: (tab: Tab) => void;
  busy: boolean;
  notice: string | null;
  quick: QuickSeed | null;
  openQuick: (seed?: QuickSeed) => void;
  closeQuick: () => void;
  commit: (mutation: Mutation) => Promise<Bundle | null>;
  togglePrivacy: () => void;
  selectTheme: (theme: ThemeId) => void;
};

const FinanceContext = createContext<Ctx | null>(null);

export function useFinance() {
  const ctx = useContext(FinanceContext);
  if (!ctx) throw new Error("Finance fora do provedor");
  return ctx;
}

function storedTheme(): ThemeId | null {
  try {
    const value = localStorage.getItem("bankai-theme");
    if (value && (THEMES as readonly string[]).includes(value)) return value as ThemeId;
  } catch {
    /* ignore */
  }
  return null;
}

function paintTheme(theme: ThemeId) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("bankai-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--c-bg").trim();
  if (meta && bg) meta.setAttribute("content", bg);
}

function errorText(error: unknown) {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "object" && error && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message) return message;
  }
  return "Não foi possível salvar.";
}

export function FinanceProvider({ user, children }: { user: AppUser; children: ReactNode }) {
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [failed, setFailed] = useState("");
  const [ym, setYm] = useState<Ym>(() => todayYm(1));
  const [tab, setTab] = useState<Tab>("home");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [quick, setQuick] = useState<QuickSeed | null>(null);
  const [confetti, setConfetti] = useState(false);
  const [pendingShare, setPendingShare] = useState<QuickSeed | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);

  useEffect(() => {
    let cancel = false;
    loadFinance()
      .then((next) => {
        if (cancel) return;
        setBundle(next);
        setYm(todayYm(next.profile.monthStartDay));
        const theme = !next.profile.onboarded ? (storedTheme() ?? next.profile.theme) : next.profile.theme;
        paintTheme(theme);
      })
      .catch((error: unknown) => {
        if (!cancel) setFailed(errorText(error));
      });
    return () => {
      cancel = true;
    };
  }, [user.id]);

  useEffect(() => {
    if (!bundle) return;
    const params = new URLSearchParams(window.location.search);
    const text = [params.get("title"), params.get("text"), params.get("url")].filter(Boolean).join("\n");
    const wants = params.get("share") || params.get("text") || params.get("title") || params.get("image");
    if (!wants) return;
    const url = new URL(window.location.href);
    ["share", "title", "text", "url", "image"].forEach((key) => url.searchParams.delete(key));
    window.history.replaceState({}, "", url.pathname + url.search);
    const finish = (seed: QuickSeed) => {
      if (bundle.profile.onboarded) setQuick(seed);
      else setPendingShare(seed);
    };
    if (params.get("image") === "1" && "caches" in window) {
      void caches.match("/__bankai_share_image").then(async (response) => {
        const seed: QuickSeed = { text };
        if (response) {
          const blob = await response.blob();
          seed.image = new File([blob], "comprovante", { type: blob.type || "image/jpeg" });
          const cache = await caches.open("bankai-share");
          await cache.delete("/__bankai_share_image");
        }
        finish(seed);
      });
      return;
    }
    if (text.trim()) finish({ text });
  }, [bundle]);

  async function commit(mutation: Mutation) {
    if (!bundle) return null;
    setBusy(true);
    try {
      const before = bundle.goals.filter((goal) => goal.done).map((goal) => goal.id);
      const next = await mutateFinance({ data: mutation });
      setBundle(next);
      paintTheme(next.profile.theme);
      const finished = next.goals.some((goal) => goal.done && !before.includes(goal.id));
      if (finished && next.profile.celebrate) setConfetti(true);
      return next;
    } catch (error) {
      setNotice(errorText(error));
      return null;
    } finally {
      setBusy(false);
    }
  }

  if (failed) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6">
        <h1 className="text-2xl font-medium">Não abriu o caixa.</h1>
        <p className="mt-2 text-sm text-muted">{failed}</p>
        <button type="button" className="mt-6 text-sm underline" onClick={() => window.location.reload()}>
          Tentar de novo
        </button>
      </main>
    );
  }

  if (!bundle) return <Boot />;

  const theme = storedTheme() ?? bundle.profile.theme;
  const value: Ctx = {
    user,
    bundle,
    ym,
    setYm,
    tab,
    setTab,
    busy,
    notice,
    quick,
    openQuick: (seed) => setQuick(seed ?? {}),
    closeQuick: () => setQuick(null),
    commit,
    togglePrivacy: () => {
      void commit({ op: "profile", profile: { privacyHidden: !bundle.profile.privacyHidden } });
    },
    selectTheme: (next) => {
      paintTheme(next);
      const plan = PRO_THEMES.includes(next) ? "pro" : bundle.profile.plan;
      void commit({ op: "profile", profile: { theme: next, plan } });
      if (PRO_THEMES.includes(next) && bundle.profile.plan === "free") {
        setNotice("Tema Pro liberado nesta demonstração.");
      }
    },
  };

  if (!bundle.profile.onboarded) {
    const short = localStorage.getItem("bankai-intro") === "1";
    return (
      <div className={bundle.profile.ambient ? "ambient" : undefined}>
        <Onboarding
          mode={short ? "name" : "full"}
          theme={theme}
          defaultName={bundle.profile.displayName || user.displayName || ""}
          onTheme={(next) => {
            paintTheme(next);
            const plan = PRO_THEMES.includes(next) ? "pro" : bundle.profile.plan;
            void commit({ op: "profile", profile: { theme: next, plan } });
          }}
          onFinish={(name) => {
            localStorage.setItem("bankai-intro", "1");
            const chosen = storedTheme() ?? theme;
            const plan = PRO_THEMES.includes(chosen) ? "pro" : "free";
            void commit({
              op: "profile",
              profile: {
                displayName: name || user.displayName || "Você",
                theme: chosen,
                plan,
                onboarded: true,
              },
            }).then(() => {
              if (pendingShare) setQuick(pendingShare);
            });
          }}
        />
        {notice ? <Notice text={notice} onDone={() => setNotice(null)} /> : null}
      </div>
    );
  }

  return (
    <FinanceContext.Provider value={value}>
      <div className={bundle.profile.ambient ? "ambient relative z-10" : "relative z-10"}>{children}</div>
      {notice ? <Notice text={notice} onDone={() => setNotice(null)} /> : null}
      {confetti ? <Confetti onDone={() => setConfetti(false)} /> : null}
    </FinanceContext.Provider>
  );
}
