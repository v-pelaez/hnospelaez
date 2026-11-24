# Lighthouse "después"

Medición del **preview de la rama** (no de producción) el 2026-11-23, con las mismas herramientas y condiciones que el "antes": Lighthouse 12.8.2 (`npx lighthouse@12`), Microsoft Edge headless 158, red y CPU simuladas por defecto, un solo URL.

**URL medida:** https://epic-hnos-pelaez-revision-tecnica-hnospelaez.victor-pelaez-perez.workers.dev (Cloudflare Workers preview de la rama `epic/hnos-pelaez-revision-tecnica`, con `_headers` aplicado; verificado con `curl -I`: 200 y `content-security-policy` presente).

## Salvedad: es un preview, no producción

- Producción (`hermanospelaez.com`) aún no tiene estos cambios; el "antes" es producción y el "después" es el preview, por lo que la comparación no es 1:1 en entorno.
- El `robots.txt` de producción lo modifica Cloudflare (Content-Signal, que Lighthouse marca como directiva desconocida); el del preview no. La regla `www` a apex tampoco aplica al `workers.dev`.
- El preview responde `X-Robots-Tag: noindex` (lo añade Cloudflare a `workers.dev`). Por eso la auditoría `is-crawlable` falla y **SEO sale 69 en el preview**; no es una regresión del código (el "antes" tenía 92 y la única auditoría fallida era el robots.txt). El SEO real hay que remedirlo en producción tras el merge.

## Resultados (mediana de 3 ejecuciones por dispositivo)

| Categoría / métrica | Móvil | Escritorio |
| :--- | :--- | :--- |
| Rendimiento | 70 | 77 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO (afectado por `noindex` del preview) | 69 | 69 |
| FCP | 2,4 s | 0,7 s |
| LCP (simulado) | 12,8 s | 4,6 s |
| TBT | 153 ms | 0 ms |
| CLS | 0 | 0 |
| Speed Index | 2,7 s | 1,1 s |
| Peso transferido | 1,19 MiB (1.250.461 B) | 1,21 MiB (1.268.912 B) |

Ejecuciones individuales (Rendimiento / LCP): móvil 71 / 12,8 s, 69 / 18,6 s, 70 / 12,8 s; escritorio 78 / 4,4 s, 73 / 9,4 s, 77 / 4,6 s. Hay variabilidad notable en el LCP simulado entre ejecuciones.

Ficheros: `mobile.report.json|html` y `desktop.report.json|html` son la ejecución 3 de cada una (la mediana en Rendimiento y LCP); `runs/` contiene el JSON de las 3 ejecuciones de cada dispositivo. Comparativa e interpretación en [`docs/audit.md`](../../audit.md#comparativa-antesdespués).

## Reproducir

```bash
export CHROME_PATH="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
U=https://epic-hnos-pelaez-revision-tecnica-hnospelaez.victor-pelaez-perez.workers.dev
npx lighthouse@12 $U --chrome-flags="--headless=new" --output=json --output=html --output-path=docs/lighthouse/after/mobile
npx lighthouse@12 $U --preset=desktop --chrome-flags="--headless=new" --output=json --output=html --output-path=docs/lighthouse/after/desktop
```

(El "antes" no fijó `CHROME_PATH` ni flags; aquí se indica Edge y `--headless=new` de forma explícita para que sea reproducible. Las mediciones usan los mismos valores por defecto de red/CPU.)

## Comprobación de CSP (Edge headless, playwright-core, `channel: 'msedge'`)

Home del preview, banner de cookies aceptado con un test:

- Antes de aceptar: consola con solo un `info` de Edge (carga diferida de imágenes) y un aviso `[PrimeUI] PrimeUI license is not configured`. **0 violaciones de CSP** (`Refused to ...`).
- Tras aceptar el banner (y tras recargar): **0 violaciones de CSP**. Único mensaje nuevo: `[nuxt-gtag] Missing Google tag ID`.
- Limitación: `NUXT_PUBLIC_GTAG_ID` está vacío en el preview, así que gtag no se carga y no se puede probar con el preview que `googletagmanager.com`/`google-analytics.com` encajan realmente en la CSP. Esa parte solo se había probado en local con un ID de prueba (ver RFP-10 en `docs/audit.md`, sin CSP aplicada). Pendiente: comprobarlo en producción tras configurar la variable.
