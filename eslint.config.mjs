// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";

export default withNuxt(prettier, {
  rules: {
    // Hay código muerto pendiente de limpieza en otro ticket: se avisa, no se bloquea.
    "@typescript-eslint/no-unused-vars": "warn",
  },
});
