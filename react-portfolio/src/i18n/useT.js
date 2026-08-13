import { useCallback } from "react";
import { useLanguage } from "./LanguageContext";
import { UI } from "./ui";

/**
 * Resolve um valor que pode ser bilíngue.
 *
 * Os dados guardam campos traduzíveis como `{ en, pt }` e deixam os demais
 * como string — assim só o que muda de idioma carrega as duas versões.
 */
export function localize(value, language) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return value[language] ?? value.en ?? "";
    }
    return value;
}

/**
 * `t("nav.projects")` para strings de interface e `t(campo)` para valores
 * bilíngues vindos dos dados.
 */
export function useT() {
    const { language } = useLanguage();

    const t = useCallback(
        (input) => {
            if (typeof input === "string" && input.includes(".")) {
                const fromUI = input
                    .split(".")
                    .reduce((node, key) => node?.[key], UI);
                if (fromUI !== undefined) return localize(fromUI, language);
            }
            return localize(input, language);
        },
        [language]
    );

    return { t, language };
}
