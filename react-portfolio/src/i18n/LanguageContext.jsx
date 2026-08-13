import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "lang";

export const LANGUAGES = ["en", "pt"];
export const DEFAULT_LANGUAGE = "en";

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

function getInitialLanguage() {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;

    // Sem escolha salva, segue o idioma do navegador: quem chega em pt-BR
    // lê em português sem precisar clicar em nada.
    const browser = navigator.language?.slice(0, 2);
    return LANGUAGES.includes(browser) ? browser : DEFAULT_LANGUAGE;
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        // Mantém o atributo lang do documento correto para leitores de tela
        // e para a hifenização do navegador.
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((current) => (current === "en" ? "pt" : "en"));
    }, []);

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
