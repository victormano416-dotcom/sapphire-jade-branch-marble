self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname !== "/compartilhar" || event.request.method !== "POST") return;
  event.respondWith(shareTarget(event.request));
});

async function shareTarget(request) {
  const form = await request.formData();
  const title = String(form.get("title") || "");
  const text = String(form.get("text") || "");
  const sharedUrl = String(form.get("url") || "");
  const file = form.get("media");
  const cache = await caches.open("bankai-share");
  if (file instanceof File && file.size > 0) {
    await cache.put(
      new Request("/__bankai_share_image"),
      new Response(file, { headers: { "Content-Type": file.type || "image/jpeg" } }),
    );
  } else {
    await cache.delete("/__bankai_share_image");
  }
  const params = new URLSearchParams();
  params.set("share", "1");
  if (title) params.set("title", title.slice(0, 300));
  if (text) params.set("text", text.slice(0, 8000));
  if (sharedUrl) params.set("url", sharedUrl.slice(0, 500));
  if (file instanceof File && file.size > 0) params.set("image", "1");
  return Response.redirect(`/?${params.toString()}`, 303);
}
