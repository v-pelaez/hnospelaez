# Lighthouse "antes" (sin tocar nada)

Medición del sitio en producción **https://hermanospelaez.com/** el 2026-11-23, con Lighthouse 12.8.2 (`npx lighthouse@12`), Microsoft Edge headless, red y CPU simuladas por defecto.

| Categoría / métrica | Móvil | Escritorio |
| :--- | :--- | :--- |
| Rendimiento | 67 | 76 |
| Accesibilidad | 95 | 95 |
| Buenas prácticas | 82 | 81 |
| SEO | 92 | 92 |
| FCP | 2,5 s | 0,7 s |
| LCP | 19,0 s | 5,2 s |
| TBT | 210 ms | 10 ms |
| CLS | 0 | 0 |
| Speed Index | 3,5 s | 1,2 s |

Elemento LCP en ambos casos: `<img src="/images/logo.svg">` del hero (sin `fetchpriority`).

Ficheros: `mobile.report.json|html` y `desktop.report.json|html` (informe completo; abre el `.html` en el navegador). No se han guardado capturas aparte: los informes HTML incluyen la captura final y la línea de tiempo.

Reproducir:

```bash
npx lighthouse@12 https://hermanospelaez.com --output=json --output=html --output-path=docs/lighthouse/before/mobile
npx lighthouse@12 https://hermanospelaez.com --preset=desktop --output=json --output=html --output-path=docs/lighthouse/before/desktop
```
