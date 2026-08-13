import { useLanguage } from "../../i18n/LanguageContext";
import { useT } from "../../i18n/useT";

const LanguageToggle = ({ className = "" }) => {
    const { language, toggleLanguage } = useLanguage();
    const { t } = useT();

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("language.label")}
            className={`inline-flex items-center gap-1.5 text-meta text-muted transition-colors hover:text-fg ${className}`}
        >
            {/* Os dois idiomas ficam visíveis, com o ativo em destaque — evita
                a dúvida de "este botão mostra o idioma atual ou o próximo?". */}
            <span className={language === "en" ? "text-fg" : undefined}>EN</span>
            <span aria-hidden="true" className="text-faint">
                /
            </span>
            <span className={language === "pt" ? "text-fg" : undefined}>PT</span>
        </button>
    );
};

export default LanguageToggle;
