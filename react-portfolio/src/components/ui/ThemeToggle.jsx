import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "../../contexts/ThemeContext";
import { useT } from "../../i18n/useT";

const ThemeToggle = ({ className = "" }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { t } = useT();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={t(isDarkMode ? "theme.toLight" : "theme.toDark")}
            aria-pressed={isDarkMode}
            // Sem moldura: é texto clicável, como os demais links do rodapé.
            className={`inline-flex items-center gap-2 text-meta text-muted transition-colors hover:text-fg ${className}`}
        >
            {isDarkMode ? (
                <RiMoonFill aria-hidden="true" className="shrink-0" />
            ) : (
                <RiSunFill aria-hidden="true" className="shrink-0" />
            )}
            <span>{t(isDarkMode ? "theme.dark" : "theme.light")}</span>
        </button>
    );
};

export default ThemeToggle;
