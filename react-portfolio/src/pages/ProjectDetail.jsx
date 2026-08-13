import { useEffect } from "react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import { getProjectBySlug } from "../data/projects";
import { useT } from "../i18n/useT";
import { SITE } from "../config/site";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);
    const { t } = useT();

    useEffect(() => {
        if (!project) return;

        document.title = `${project.title} — ${SITE.name}`;
        return () => {
            document.title = `${SITE.name} — Developer Portfolio`;
        };
    }, [project]);

    // Slug inexistente volta para a home em vez de renderizar uma página vazia.
    if (!project) return <Navigate to="/" replace />;

    const {
        title,
        tagline,
        summary,
        context,
        headline,
        facts,
        status,
        technologies,
        website,
        cover,
        gallery,
        flow,
        overview,
        highlights,
        contribution,
    } = project;

    return (
        <Container className="py-12 sm:py-16">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-meta text-muted transition-colors hover:text-fg"
            >
                <FiArrowLeft aria-hidden="true" />
                {t("project.back")}
            </Link>

            <article className="mt-12 sm:mt-16">
                {/* Cabeçalho: nome do produto + contexto, e o headline com
                    parte do texto em destaque, como no design. */}
                <header className="space-y-6">
                    <p className="text-label text-fg">
                        <span className="font-semibold">{title}</span>
                        {context && <span className="text-faint"> — {t(context)}</span>}
                    </p>

                    <h1
                        className="max-w-3xl text-balance font-normal text-muted"
                        style={{
                            fontSize: "clamp(1.875rem, 4.4vw, 2.75rem)",
                            lineHeight: 1.25,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {headline?.length > 0
                            ? headline.map((segment, index) => (
                                  <span
                                      key={index}
                                      className={segment.strong ? "text-fg" : undefined}
                                  >
                                      {t(segment.text)}
                                  </span>
                              ))
                            : t(tagline ?? summary)}
                    </h1>

                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-fg px-7 py-3 text-meta font-semibold text-bg transition-opacity hover:opacity-80"
                        >
                            {t("project.visit")}
                            <FiArrowUpRight aria-hidden="true" />
                        </a>
                    )}
                </header>

                {overview?.length > 0 && (
                    <section className="mt-14 max-w-2xl space-y-5 sm:mt-16">
                        <h2 className="text-section text-fg">{t("project.glance")}</h2>
                        {overview.map((paragraph, index) => (
                            <p key={index} className="text-base text-body">
                                {t(paragraph)}
                            </p>
                        ))}
                    </section>
                )}

                {/* Grid de contexto: cada coluna com a barra de 1px do design. */}
                {facts?.length > 0 && (
                    <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 lg:grid-cols-4 lg:gap-x-6">
                        {facts.map((fact) => (
                            <div key={t(fact.label)} className="flex gap-4">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 w-px shrink-0 self-stretch bg-rule"
                                />
                                <div className="space-y-3">
                                    <dt className="text-base text-body">{t(fact.label)}</dt>
                                    <dd className="space-y-1">
                                        {fact.values.map((value) => (
                                            <p key={t(value)} className="text-meta text-body">
                                                {t(value)}
                                            </p>
                                        ))}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                )}

                {cover && (
                    <img
                        src={cover}
                        alt={`${title} — ${t("project.keyVisual")}`}
                        loading="lazy"
                        decoding="async"
                        // Mesma proporção da arte (16:9): com altura máxima
                        // fixa o container ficava mais largo que a imagem e o
                        // `object-cover` cortava topo e base.
                        className="mt-14 aspect-video w-full rounded-2xl border border-line object-cover sm:mt-20"
                    />
                )}

                {/* Key features: barra de acento azul + título + descrição. */}
                {highlights?.length > 0 && (
                    <section className="mt-16 sm:mt-24">
                        <div className="flex flex-col items-center gap-2">
                            <span aria-hidden="true" className="h-px w-6 bg-fg" />
                            <h2 className="text-meta font-semibold uppercase text-fg">
                                {t("project.features")}
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
                            {highlights.map((highlight) => (
                                <div key={t(highlight.title)} className="flex gap-4">
                                    <span
                                        aria-hidden="true"
                                        className="mt-1 h-5 w-0.5 shrink-0 bg-accent"
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-feature text-fg">
                                            {t(highlight.title)}
                                        </h3>
                                        <p className="text-base text-body">
                                            {t(highlight.description)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Passo a passo: cada tela ao lado do que ela resolve. O lado
                    da imagem alterna para a leitura não virar uma coluna só. */}
                {flow?.length > 0 && (
                    <section className="mt-16 sm:mt-24">
                        <div className="flex flex-col items-center gap-2">
                            <span aria-hidden="true" className="h-px w-6 bg-fg" />
                            <h2 className="text-meta font-semibold uppercase text-fg">
                                {t("project.howItWorks")}
                            </h2>
                        </div>

                        <ol className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
                            {flow.map((step, index) => (
                                <li
                                    key={t(step.title)}
                                    className={`flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 ${
                                        index % 2 === 1
                                            ? "lg:flex-row-reverse"
                                            : "lg:flex-row"
                                    }`}
                                >
                                    <div className="flex w-full shrink-0 items-end justify-center gap-4 sm:w-auto">
                                        {step.images.map((src) => (
                                            <img
                                                key={src}
                                                src={src}
                                                alt={`${title} — ${t(step.title)}`}
                                                loading="lazy"
                                                decoding="async"
                                                // Duas telas no mesmo passo
                                                // (claro e escuro) dividem o
                                                // espaço em vez de estourar.
                                                className={
                                                    step.images.length > 1
                                                        ? "w-1/2 max-w-[11rem]"
                                                        : "w-2/3 max-w-[13rem] sm:w-auto"
                                                }
                                            />
                                        ))}
                                    </div>

                                    <div className="flex gap-4 lg:max-w-md">
                                        <span
                                            aria-hidden="true"
                                            className="mt-1.5 h-5 w-0.5 shrink-0 bg-accent"
                                        />
                                        <div className="space-y-3">
                                            <h3 className="text-feature text-fg">
                                                {t(step.title)}
                                            </h3>
                                            <p className="text-base text-body">
                                                {t(step.description)}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

                {!flow?.length && gallery?.length > 0 && (
                    <section className="mt-16 sm:mt-24">
                        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                            {gallery.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`${title} — ${t("project.screen")} ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    // Sem borda nem raio: os mockups já vêm
                                    // recortados, e a moldura retangular
                                    // apareceria em volta do aparelho.
                                    className="w-full"
                                />
                            ))}
                        </div>
                    </section>
                )}

                {contribution?.length > 0 && (
                    <section className="mt-16 max-w-2xl space-y-5 sm:mt-24">
                        <h2 className="text-section text-fg">{t("project.myRole")}</h2>
                        {contribution.map((paragraph, index) => (
                            <p key={index} className="text-base text-body">
                                {t(paragraph)}
                            </p>
                        ))}
                    </section>
                )}

                {technologies?.length > 0 && (
                    <section className="mt-16 sm:mt-24">
                        <h2 className="text-section text-fg">{t("project.builtWith")}</h2>
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <li
                                    key={tech}
                                    className="rounded-full bg-surface px-4 py-2 text-meta text-body"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {status && (
                    <p className="mt-16 text-meta text-faint sm:mt-20">{t(status)}</p>
                )}
            </article>
        </Container>
    );
};

export default ProjectDetail;
