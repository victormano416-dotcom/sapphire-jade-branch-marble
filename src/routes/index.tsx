import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "@/components/finance/auth-screen";
import { Onboarding } from "@/components/finance/onboarding";
import { FinanceProvider } from "@/components/finance/provider";
import { AppShell } from "@/components/finance/shell";
import { Boot } from "@/components/finance/ui";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { THEMES, type ThemeId } from "@/lib/finance/types";

export const Route = createFileRoute("/")({ component: Page });

function Page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { user, isPending } = useCurrentUserState();
  if (!mounted || isPending) return <Boot />;
  if (!user) return <Guest />;
  return (
    <FinanceProvider user={user}>
      <AppShell />
    </FinanceProvider>
  );
}

function Guest() {
  const [ready, setReady] = useState(() => localStorage.getItem("bankai-intro") === "1");
  const [theme, setTheme] = useState<ThemeId>(() => {
    const stored = localStorage.getItem("bankai-theme");
    return stored && (THEMES as readonly string[]).includes(stored) ? (stored as ThemeId) : "obsidian";
  });
  if (!ready) {
    return (
      <Onboarding
        mode="guest"
        theme={theme}
        onTheme={(next) => {
          setTheme(next);
          document.documentElement.dataset.theme = next;
          localStorage.setItem("bankai-theme", next);
        }}
        onFinish={() => {
          localStorage.setItem("bankai-intro", "1");
          setReady(true);
        }}
      />
    );
  }
  return <AuthScreen />;
}
