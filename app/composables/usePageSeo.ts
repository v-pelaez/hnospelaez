// Metadatos SEO por página: title, description, canonical, og:* y twitter:*.
// Lo global (og:site_name, og:locale, og:type, og:image, twitter:card) vive en app.vue.
const SITE_URL = "https://hermanospelaez.com";

export function usePageSeo(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}) {
  const url = opts.path === "/" ? SITE_URL + "/" : SITE_URL + opts.path;
  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: url,
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    robots: opts.noindex ? "noindex, follow" : undefined,
  });
  useHead({ link: [{ rel: "canonical", href: url }] });
}
