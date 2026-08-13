/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            // Cores semânticas. Os valores vivem em src/index.css como canais
            // RGB, então trocar o tema é trocar as variáveis — nenhum
            // componente precisa de variantes `dark:`.
            colors: {
                bg: "rgb(var(--bg) / <alpha-value>)",
                surface: "rgb(var(--surface) / <alpha-value>)",
                "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
                line: "rgb(var(--line) / <alpha-value>)",
                rule: "rgb(var(--rule) / <alpha-value>)",
                fg: "rgb(var(--fg) / <alpha-value>)",
                body: "rgb(var(--body) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
                faint: "rgb(var(--faint) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
            },
            fontFamily: {
                // O design usa SF Pro. A stack de sistema entrega a SF Pro
                // real em Apple; Inter é o fallback mais próximo fora dela.
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "SF Pro Text",
                    "Inter",
                    "Segoe UI",
                    "sans-serif",
                ],
            },
            // Escala tipográfica medida no Figma: tamanho + leading + tracking.
            fontSize: {
                meta: ["0.875rem", { lineHeight: "1.225rem", letterSpacing: "-0.025em" }],
                base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.02em" }],
                label: ["1.125rem", { lineHeight: "1.35rem", letterSpacing: "-0.01em" }],
                feature: ["1.3125rem", { lineHeight: "1.64rem", letterSpacing: "-0.01em" }],
                section: ["1.375rem", { lineHeight: "1.65rem", letterSpacing: "-0.012em" }],
                display: ["2.75rem", { lineHeight: "3.4375rem", letterSpacing: "-0.02em" }],
            },
        },
    },
    plugins: [],
};
