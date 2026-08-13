import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "theme";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

function getInitialTheme() {
    // O script inline no index.html já aplicou a classe antes do primeiro
    // paint; ler de volta do DOM mantém React e página em sincronia e evita
    // o flash de tema errado.
    if (typeof document !== "undefined") {
        return document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
    }
    return "light";
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    // Acompanha o tema do sistema enquanto o usuário não escolher um
    // manualmente.
    useEffect(() => {
        const query = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (event) => {
            if (localStorage.getItem(STORAGE_KEY)) return;
            setTheme(event.matches ? "dark" : "light");
        };

        query.addEventListener("change", handleChange);
        return () => query.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, isDarkMode: theme === "dark", toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
