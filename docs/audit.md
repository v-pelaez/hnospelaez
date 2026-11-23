## Cabeceras, caché y dominio canónico

- Dominio canónico: apex `https://hermanospelaez.com` (robots.txt, sitemap vía `site.url` en `nuxt.config.ts` y JSON-LD en `app/app.vue`).
- `public/_headers` (copiado a `.output/public`) define CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, caché inmutable para `/_nuxt/*` y revalidación para HTML.
- La CSP usa `'unsafe-inline'` en scripts/estilos porque el SSG de Nuxt inyecta scripts inline sin nonce; permite solo los hosts de Google Tag Manager/Analytics que necesita gtag.
- Verificación tras desplegar: `curl -sI https://hermanospelaez.com/ | grep -iE "content-security|strict-transport|nosniff|referrer|permissions|cache-control"` y `curl -sI https://hermanospelaez.com/_nuxt/<fichero>.js`; o securityheaders.com.

**Needs owner:** crear en Cloudflare (dominio `hermanospelaez.com` → Rules → Redirect Rules) la regla `www.hermanospelaez.com/*` → `https://hermanospelaez.com/${1}`, 301, conservando query string; el registro DNS `www` debe estar proxied (naranja).
