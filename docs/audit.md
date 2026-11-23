# Auditoría base del repositorio

Fecha: 2026-11-23. Alcance: código, SEO, accesibilidad, seguridad/privacidad y despliegue. Cada hallazgo se ha verificado leyendo el código (o la respuesta real de producción) antes de anotarlo.

Medición Lighthouse previa: ver [`docs/lighthouse/before/`](./lighthouse/before/README.md) (móvil: 67 / 95 / 82 / 92; escritorio: 76 / 95 / 81 / 92 en Rendimiento / Accesibilidad / Buenas prácticas / SEO).

Severidad: **Alta** (riesgo legal, de producción o gran impacto), **Media**, **Baja**. La columna *Resultado* se rellenará al cerrar cada tarea.

## Despliegue

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| D1 | El despliegue real es Cloudflare Workers (static assets, integración Git, proyecto `hnospelaez`), pero el repo conserva `.github/workflows/deploy.yml` (GitHub Pages en push a `main`) y `CNAME` (propio de GitHub Pages). | Confusión sobre cuál es el despliegue vigente; el workflow genera un despliegue paralelo que puede publicar una versión distinta. | Alta | Eliminar workflow Pages y `CNAME`; sustituir por CI de verificación (generate + typecheck). | |
| D2 | Nada de Cloudflare está versionado: sin `wrangler.jsonc`, sin `public/_headers`, sin `_redirects`. | Configuración irreproducible, solo existe en el panel; imposible revisar cambios. | Alta | Versionar `wrangler.jsonc` (assets, `compatibility_date`) y `_headers`. | |
| D3 | Producción sirve todo con `Cache-Control: public, max-age=0, must-revalidate` (incluidas imágenes webp y `/_nuxt/*` con hash). | Sin caché de larga duración: más peticiones y peor carga repetida. | Media | `_headers` con `immutable` para `/_nuxt/*` y caché larga para `/images/*`. | |
| D4 | Observabilidad de Workers deshabilitada. | Sin logs ni métricas de peticiones/errores. | Baja | Activar `observability` en la config de wrangler. | |
| D5 | `robots.txt` en producción lo modifica Cloudflare (Content Signals, líneas añadidas) y difiere del de `public/robots.txt`; Lighthouse marca "Unknown directive" en `Content-Signal`. | Auditoría robots.txt fallida (SEO 92 en vez de 100); fuente de verdad doble. | Baja | Decidir si se desactiva el "managed robots.txt" de Cloudflare o se acepta; documentar. | |
| D6 | `README` indica Node/Cloudflare sin mencionar el flujo de despliegue; el workflow usa Node 20 y no hay `engines` ni `.nvmrc`. | Versión de Node no fijada entre CI, local y Cloudflare. | Baja | Fijar versión de Node (`.nvmrc` / `engines`) y documentar el despliegue. | |

## Código y calidad

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| C1 | Sin ESLint, Prettier ni tests. | Sin red de seguridad ni estilo uniforme. | Media | Añadir ESLint (`@nuxt/eslint`) y Prettier; tests mínimos (smoke del generate). | |
| C2 | `typescript.typeCheck: false` y ningún paso de typecheck en CI (existe `npm run typecheck`, pero no se ejecuta y hoy falla antes de comprobar nada: `vue-tsc` 3.x lanza `ERR_PACKAGE_PATH_NOT_EXPORTED` con `typescript` 7). | Errores de tipos llegan a producción sin detectarse. | Media | Ejecutar `npm run typecheck` en CI y corregir lo que falle. | |
| C3 | `@nuxtjs/sitemap` aparece duplicado en `modules` de `nuxt.config.ts`. | Registro doble del módulo; ruido y posible comportamiento indefinido. | Baja | Eliminar el duplicado. | |
| C4 | Código comentado: `<PortfolioSection />` en `index.vue`, bloque `nitro: { preset: "github-pages" }` y `app.baseURL` en `nuxt.config.ts`, botón "Ver trabajos" en `HeroSection.vue`. | Código muerto y restos de la migración a GitHub Pages. | Baja | Eliminar los restos de GitHub Pages; decidir si el portfolio se reactiva o se borra. | |
| C5 | `PortfolioSection.vue` (245 líneas) y `app/data/projects.ts` no se usan, pero el menú de `TheHeader.vue` enlaza a `/#portfolio` y `/?category=...#portfolio`, que no existen. | Cinco enlaces del menú llevan a la portada sin sección destino (UX rota). | Media | Reactivar el portfolio u ocultar el submenú "Trabajos" mientras tanto. | |
| C6 | "Kill-switch" CSS en `app.vue` que oculta `div[style*="z-index: 99999"]` y `2147483647` con `!important`. | Parche opaco contra overlays de PrimeUI; puede ocultar elementos legítimos. | Baja | Localizar la causa real (¿devtools de PrimeVue?) y retirar la regla. | |
| C7 | La lógica de consentimiento está duplicada: `CookieBanner.vue` y `cookies.vue` implementan cada una su propio banner/estado con la misma clave de `localStorage`. | Mantenimiento doble y comportamientos divergentes (ver P1). | Media | Extraer un composable único `useCookieConsent`. | Resuelto: `app/composables/useCookieConsent.ts` + un único `CookieBanner.vue`; eliminado el banner de `cookies.vue`. |
| C8 | `tailwind.config.js` con `content: []` y `ClientsSection` duplica el bucle de logos para el carrusel. | Menor; configuración vacía y marcado duplicado. | Baja | Limpiar al tocar esos componentes. | |

## SEO

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| S1 | Un único `useHead` global en `app.vue`: mismo título/descripción para las 4 páginas; sin `og:*`, `twitter:*` ni `canonical` por página (existe `seoimage.webp` sin usar). | Previsualizaciones sociales pobres, títulos duplicados en legales. | Media | `useSeoMeta` por página + `canonical` + og:image. Configurar `site.url`. | |
| S2 | JSON-LD con `https://www.hermanospelaez.com` aunque el dominio canónico es el apex (`hermanospelaez.com`, como `robots.txt`). | Señal inconsistente de entidad/URL. | Media | Usar el apex en `@id`, `url` e `image`. | |
| S3 | JSON-LD incompleto: sin `openingHoursSpecification`, `sameAs`, `geo`, `priceRange`, y tipo genérico `LocalBusiness`. | Menos elegibilidad para resultados enriquecidos/ficha local. | Baja | Completar datos con el cliente (horarios, redes) y valorar `HomeAndConstructionBusiness`/`Store`. | |
| S4 | No se configura `site.url` para `@nuxtjs/sitemap` en `nuxt.config.ts`. | El sitemap depende de variables de entorno/autodetección; riesgo de URLs erróneas. | Media | Definir `site: { url: 'https://hermanospelaez.com' }`. | |
| S5 | `og:image`/favicon: solo `favicon.ico`; sin `apple-touch-icon` ni manifest. | Iconos incompletos en móviles. | Baja | Añadir iconos. | |

## Rendimiento (Lighthouse)

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| R1 | El elemento LCP es `logo.svg` (26 KB, `h-72`) del hero, sin `fetchpriority`/preload; LCP móvil 19,0 s, escritorio 5,2 s. | Principal causa del 67/76 en Rendimiento. | Alta | Priorizar el logo (preload/`fetchpriority="high"`), reducir/optimizar el SVG; la imagen de fondo ya lleva `fetchpriority`, pero el logo no. |  Resuelto: `fetchpriority="high"` en `logo.svg` (elemento LCP real del hero) con `width`/`height`; retirado `fetchpriority` de `hero-bg.webp` (tapado por el degradado, competía por ancho de banda con el logo). Medido en Edge headless, móvil 390 px con red limitada (200 KB/s, 150 ms): LCP 1,5 s sobre `logo.svg`. No medido con Lighthouse oficial (comparar con la línea base de 19 s tras desplegar). |
| R2 | Imágenes sin `width`/`height` (logos de clientes, taller, fundador, hero, cabecera); `unsized-images` 0,5. Sin `loading="lazy"` en imágenes bajo el pliegue. Lighthouse estima 454 KiB de ahorro (tamaño inadecuado) y 60 KiB de offscreen. CLS actual 0. | Riesgo de CLS futuro y bytes innecesarios. | Media | Añadir dimensiones, `loading="lazy"`, `decoding="async"`; valorar `@nuxt/image` y variantes responsive (~1,2 MB de webp en `public/images`). |  Resuelto: `width`/`height` en todas las `<img>` (hero, cabecera, taller, fundador, logos de clientes; las dimensiones de los logos van en `app/data/clients.ts`), `loading="lazy"` + `decoding="async"` bajo el pliegue. Recomprimidos con sharp: `alfonsoPelaez`/`taller-3`/`taller-4` de 1920 a 960 px (172/48/86 KB a 41/34/20 KB), logos de clientes a 480 px máx. (`laloca` 49 a 14 KB, etc.). CLS medido 0 en móvil y escritorio, sin imágenes sin dimensiones. `taller-1`, `taller-2` y `Gepetto made me` no se usan en la web y no se han tocado. No se ha adoptado `@nuxt/image`. |
| R3 | JS sin usar (~40 KiB) y recursos que bloquean el render (80-150 ms). | Menor. | Baja | Revisar PrimeVue (`unstyled`, sin componentes usados) y gtag. | |

## Accesibilidad

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| A1 | Contraste insuficiente (4,17:1, `text-neutral-500` #737373 sobre #0a0a0a, p. ej. etiqueta "Teléfono" en Contacto). | Falla WCAG AA. | Media | Subir a `neutral-400`. |  Resuelto: etiquetas "Teléfono", "Email" y "Horario de atención" a `text-neutral-400` (#a3a3a3 sobre #0a0a0a, aprox. 7,6:1). |
| A2 | Imágenes de cliente con `alt` correcto pero el carrusel duplica los logos (el bucle 2 repite el `alt`). | Lectores de pantalla leen cada logo dos veces. | Baja | Marcar el segundo bucle `aria-hidden="true"` / `alt=""`. |  Resuelto: el bucle 2 del carrusel lleva `aria-hidden="true"` y `alt=""`. |
| A3 | Banner de cookies sin `role`/`aria-live` ni gestión de foco; el menú móvil/desplegable debe revisarse con teclado. | Navegación asistida mejorable. | Baja | Revisar con teclado y lector de pantalla. | Parcial: el banner lleva `role="dialog"` y `aria-label`. Menú móvil: `role="dialog"`/`aria-modal`, `aria-expanded` en la hamburguesa, foco al botón de cierre al abrir, Escape cierra y devuelve el foco; indicador de foco visible (`focus-visible`, antes `focus:outline-none` sin alternativa). Probado con teclado en Edge headless. Sin atrapar el foco (focus trap) ni revisar el banner con lector de pantalla. |

## Seguridad y privacidad (RGPD)

| ID | Problema | Impacto | Severidad | Decisión | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P1 | **El banner global (`CookieBanner.vue`) nunca llama a `gtag('consent','update')`** (solo tiene un `TODO`); la actualización a `granted` solo ocurre en `cookies.vue`. Quien acepta en el banner no activa analítica hasta visitar `/cookies` y recargar. | Consentimiento ineficaz y medición rota; incoherencia entre lo que se guarda y lo que se envía a Google. | Alta | Centralizar en `useCookieConsent`: aplicar el consentimiento al aceptar y al cargar. | Resuelto: aceptar llama a `initialize()` y `gtag('consent','update',{analytics_storage:'granted'})`; se reaplica en cada carga. `initMode: "manual"` en `nuxt.config.ts`: sin consentimiento no se carga `gtag.js`. |
| P2 | El banner afirma usar cookies para "publicidad personalizada", pero `cookies.vue` solo declara técnicas y analíticas, y el consentimiento concede además `ad_storage`, `ad_user_data` y `ad_personalization`. | Información al usuario incoherente con el tratamiento real (RGPD/LSSI). | Alta | Conceder solo `analytics_storage` (o declarar la publicidad); alinear textos. | Resuelto: solo se concede `analytics_storage`; `ad_*` siguen `denied`. Textos del banner y de `/cookies` ajustados (solo técnicas + analítica, sin publicidad). |
| P3 | `cookies.vue` remite a un "panel de configuración de cookies" que no existe; no hay forma de revocar o cambiar la decisión una vez guardada (solo borrar `localStorage`). Además `cookies.vue` incluye su propio banner. | Incumple la facilidad de revocación. | Alta | Añadir enlace "Configurar cookies" en el pie y en `/cookies`. | Resuelto: botón "Configurar cookies" en el pie y en `/cookies` que reabre el banner (cambiar/revocar); rechazar y aceptar con el mismo estilo de botón. |
| P4 | La política de privacidad no menciona Google Analytics ni encargados/transferencias; domicilio truncado ("Calle Juan de la Plz."). El aviso legal y el JSON-LD escriben "Calle Juan de la Plaza 1". | Información legal incompleta e inconsistente. | Media | Revisar textos con el cliente y unificar dirección. | Parcial: añadida sección 5 (Google Analytics, transferencias a Google LLC) en la política de privacidad. Pendiente de revisión del dueño: textos legales (no es asesoramiento legal), duración exacta de cookies, base legal y la dirección truncada. |
| P5 | Sin cabeceras de seguridad (HSTS, CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`) en producción; Lighthouse: "No CSP found in enforcement mode". | Buenas prácticas 82/81; superficie para clickjacking/XSS. | Media | Definirlas en `public/_headers` (CSP compatible con gtag). | |
| P6 | Script de Cloudflare `/cdn-cgi/challenge-platform/.../main.js` activo en producción, que genera avisos de APIs obsoletas (`deprecations`: FencedFrame, `StorageType.persistent`) en Lighthouse. | Resta puntos de Buenas prácticas; ajeno al código del repo. | Baja | Decidir si se desactiva Bot Fight / JS detections en Cloudflare. | |
| P7 | `NUXT_PUBLIC_GTAG_ID` solo se inyecta en el workflow de Pages (secreto de GitHub); en Cloudflare debe estar en variables de build, y no hay `.env.example` (el `.gitignore` ya lo contempla). | Riesgo de desplegar sin analítica sin darse cuenta. | Media | Documentar la variable y añadir `.env.example`. | |

## Cabeceras, caché y dominio canónico

- Dominio canónico: apex `https://hermanospelaez.com` (robots.txt, sitemap vía `site.url` en `nuxt.config.ts` y JSON-LD en `app/app.vue`).
- `public/_headers` (copiado a `.output/public`) define CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, caché inmutable para `/_nuxt/*` y revalidación para HTML.
- La CSP usa `'unsafe-inline'` en scripts/estilos porque el SSG de Nuxt inyecta scripts inline sin nonce; permite solo los hosts de Google Tag Manager/Analytics que necesita gtag.
- Verificación tras desplegar: `curl -sI https://hermanospelaez.com/ | grep -iE "content-security|strict-transport|nosniff|referrer|permissions|cache-control"` y `curl -sI https://hermanospelaez.com/_nuxt/<fichero>.js`; o securityheaders.com.

**Needs owner:** crear en Cloudflare (dominio `hermanospelaez.com` → Rules → Redirect Rules) la regla `www.hermanospelaez.com/*` → `https://hermanospelaez.com/${1}`, 301, conservando query string; el registro DNS `www` debe estar proxied (naranja).


## Verificación de consentimiento (RFP-10)

Probado con `npm run generate` (`NUXT_PUBLIC_GTAG_ID=G-TEST000000`), servidor estático local y Edge headless (playwright-core), mirando las peticiones de red:

- Sin elección: banner visible, 0 peticiones a Google (ni `gtag/js` ni `collect`).
- Rechazar: 0 peticiones, elección `rejected` persistida; tras recargar no reaparece el banner y sigue sin peticiones.
- Aceptar: se carga `gtag/js?id=G-TEST000000` y se envía `collect`; persiste tras recargar.
- "Configurar cookies" del pie reabre el banner. Retirar el consentimiento tras aceptar envía `consent update` con `analytics_storage: denied` (no verificado en red; la cookie `_ga` ya instalada no se borra hasta limpiar el navegador).
- Requiere revisión del dueño/asesor legal: textos de banner, cookies y privacidad; si más adelante se usa publicidad habrá que declararla y conceder `ad_*`.

## Verificación de imágenes y accesibilidad (RFP-11)

Probado con `npm run generate`, servidor estático local y Edge headless (playwright-core, `channel: 'msedge'`), con axe-core 4.x (reglas wcag2a/2aa/21aa y best-practice) sobre la home:

- Móvil (390 px): CLS 0; LCP `logo.svg`; axe sin violaciones. Un único `h1`; jerarquía h1, h2, h3 correcta en la home.
- Escritorio (1350 px): CLS 0; LCP en el `h1`; axe solo `landmark-unique` (moderada: dos `nav` sin etiqueta distinta). Pendiente, no crítica.
- No se ha ejecutado Lighthouse oficial; las cifras de LCP son con red emulada (CDP), no comparables 1:1 con la línea base.
