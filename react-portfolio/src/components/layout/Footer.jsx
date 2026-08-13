import { Link } from "react-router-dom";
import logo from "../../assets/lorenzo-logo.webp";
import { SITE, SOCIALS } from "../../config/site";
import PROJECTS from "../../data/projects";
import { useT } from "../../i18n/useT";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";
import Container from "./Container";

const linkClass = "block text-base text-body transition-colors hover:text-fg";

const headingClass =
    "text-xs font-semibold uppercase tracking-[0.16em] text-faint";

const Footer = () => {
    const { t } = useT();

    return (
    <footer className="border-t border-line">
        <Container className="py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                <Link to="/" aria-label={`${SITE.name} — ${t("nav.home")}`} className="shrink-0">
                    <img
                        src={logo}
                        alt=""
                        width="40"
                        height="40"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </Link>

                <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:flex-1 lg:justify-center">
                    {/* Some junto com a seção de projetos enquanto a lista estiver vazia. */}
                    {PROJECTS.length > 0 && (
                        <nav className="space-y-4">
                            <h2 className={headingClass}>{t("sections.projects")}</h2>
                            <div className="space-y-2">
                                {PROJECTS.map((project) => (
                                    <Link
                                        key={project.slug}
                                        to={`/${project.slug}`}
                                        className={linkClass}
                                    >
                                        {project.title}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    )}

                    <nav className="space-y-4">
                        <h2 className={headingClass}>{t("sections.contact")}</h2>
                        <div className="space-y-2">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end">
                    <div className="flex items-center gap-5">
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                    <p className="text-sm text-muted lg:text-right">
                        © {new Date().getFullYear()} {SITE.name}.
                        <br />
                        {t("footer.rights")}
                    </p>
                </div>
            </div>
        </Container>
        </footer>
    );
};

export default Footer;
