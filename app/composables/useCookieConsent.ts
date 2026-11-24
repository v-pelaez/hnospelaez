// Composable unico para el consentimiento de cookies (Consent Mode v2).
// Sin consentimiento NO se carga gtag.js (nuxt-gtag en initMode "manual").
const COOKIE_CONSENT_KEY = "hnos_pelaez_cookie_consent";

type ConsentChoice = "accepted" | "rejected" | null;

export function useCookieConsent() {
  const { gtag, initialize } = useGtag();
  // Estado compartido entre banner, footer y /cookies
  const choice = useState<ConsentChoice>("cookie-consent-choice", () => null);
  const isBannerVisible = useState<boolean>("cookie-consent-visible", () => false);
  const loaded = useState<boolean>("cookie-consent-loaded", () => false);

  // Solo se concede analytics_storage; ad_* permanecen denied (no hay publicidad)
  const applyConsent = (value: ConsentChoice): void => {
    if (value === "accepted") {
      if (!loaded.value) {
        initialize();
        loaded.value = true;
      }
      gtag("consent", "update", { analytics_storage: "granted" });
    } else if (loaded.value) {
      gtag("consent", "update", { analytics_storage: "denied" });
    }
  };

  const save = (value: Exclude<ConsentChoice, null>): void => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // almacenamiento no disponible: la eleccion solo vale para esta sesion
    }
    choice.value = value;
    isBannerVisible.value = false;
    applyConsent(value);
  };

  // Lee la eleccion guardada (solo cliente) y la aplica
  const init = (): void => {
    let stored: string | null;
    try {
      stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
      stored = null;
    }
    if (stored === "accepted" || stored === "rejected") {
      choice.value = stored;
      applyConsent(stored);
    } else {
      isBannerVisible.value = true;
    }
  };

  // Reabre el banner para cambiar o revocar la decision
  const openSettings = (): void => {
    isBannerVisible.value = true;
  };

  return {
    choice,
    isBannerVisible,
    init,
    accept: () => save("accepted"),
    reject: () => save("rejected"),
    openSettings,
  };
}
