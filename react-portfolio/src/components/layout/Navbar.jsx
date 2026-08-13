import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/lorenzo-logo.webp";
import { NAV_LINKS, SITE } from "../../config/site";
import { useT } from "../../i18n/useT";
import Container from "./Container";

const linkClass = "text-meta transition-colors sm:text-base";

const Navbar = () => {
    const { pathname } = useLocation();
    const { t } = useT();

    return (
        <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
            <Container as="nav" className="flex items-center justify-between py-4">
                <Link to="/" aria-label={`${SITE.name} — ${t("nav.home")}`}>
                    <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={logo}
                        alt=""
                        width="32"
                        height="32"
                    />
                </Link>

                <div className="flex items-center gap-6 sm:gap-9">
                    {NAV_LINKS.map((link) => {
                        if (link.external) {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${linkClass} text-muted hover:text-fg`}
                                >
                                    {t(link.label)}
                                </a>
                            );
                        }

                        // A rota ativa fica sublinhada, como no design.
                        const isActive = pathname === link.to;

                        return (
                            <Link
                                key={link.label}
                                to={link.to}
                                aria-current={isActive ? "page" : undefined}
                                className={`${linkClass} ${
                                    isActive
                                        ? "text-fg underline underline-offset-4"
                                        : "text-muted hover:text-fg"
                                }`}
                            >
                                {t(link.label)}
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
