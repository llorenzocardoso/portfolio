import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useT } from "../../i18n/useT";
import Tilt from "../ui/Tilt";

/**
 * Card de projeto da home, no formato do design: nome do produto pequeno,
 * tagline em display, e uma faixa com metadados de um lado e o preview do
 * outro — alternando o lado a cada card.
 */
const ProjectCard = ({ project, index = 0 }) => {
    const {
        slug,
        title,
        tagline,
        summary,
        status,
        categories,
        role,
        images,
        display,
    } = project;

    const { t } = useT();
    const hasImages = images?.length > 0;
    const imageFirst = index % 2 === 1;

    return (
        <motion.article
            id={slug}
            // `whileInView` substitui o listener de scroll manual: entra
            // uma vez, sem medir getBoundingClientRect a cada frame.
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // Sem caixa: os projetos são separados por uma linha divisória.
            // O gutter mora aqui, e não num Container por fora, para que a
            // borda do `divide-y` corra de ponta a ponta do frame.
            className="px-5 py-14 sm:px-8 sm:py-20"
        >
            <header className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="text-meta font-semibold text-muted">{title}</p>
                    {status && (
                        <span className="rounded-full border border-line px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-faint">
                            {t(status)}
                        </span>
                    )}
                </div>
                <h3
                    className="text-balance font-bold text-fg"
                    style={{
                        fontSize: "clamp(1.75rem, 4.2vw, 2.75rem)",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t(tagline ?? summary)}
                </h3>
            </header>

            <div
                className={`mt-10 flex flex-col gap-8 lg:items-start ${
                    imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
            >
                {/* Sem preview, a coluna de texto ocupa a largura toda em vez
                    de deixar dois terços de vazio ao lado. */}
                <div className={`space-y-6 ${hasImages ? "lg:w-[30%]" : "w-full"}`}>
                    {/* O card mostra o domínio do produto; a stack fica na
                        página do projeto, em "Built with". */}
                    {categories?.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <li
                                    key={t(category)}
                                    className="rounded-full bg-surface px-3 py-1.5 text-meta text-body"
                                >
                                    {t(category)}
                                </li>
                            ))}
                        </ul>
                    )}

                    {role && <p className="text-meta text-muted">{t(role)}</p>}

                    <Link
                        to={`/${slug}`}
                        className="inline-block rounded-lg bg-fg px-7 py-3 text-meta font-semibold text-bg transition-opacity hover:opacity-80"
                    >
                        {t("project.viewWork")}
                    </Link>
                </div>

                {hasImages && (
                    <div className="lg:w-[70%]">
                        <Tilt
                            className={`rounded-xl border border-line bg-surface p-6 sm:p-10 ${
                                // "phone" é o mockup em pé, que precisa de um
                                // palco vertical no mobile; "browser" é o
                                // mockup deitado, que já nasce em 4:3.
                                display === "phone"
                                    ? "aspect-[3/4] sm:aspect-[16/10]"
                                    : "aspect-[4/3]"
                            }`}
                        >
                            {images.map((src, imageIndex) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={
                                        imageIndex === 0
                                            ? title
                                            : `${title} — screen ${imageIndex + 1}`
                                    }
                                    loading="lazy"
                                    decoding="async"
                                    // min-w-0 impede que várias imagens
                                    // estourem o container em telas estreitas.
                                    // A sombra dá ao mockup recortado a mesma
                                    // profundidade que ele tem no design.
                                    className="h-full min-w-0 max-w-full object-contain drop-shadow-2xl"
                                />
                            ))}
                        </Tilt>
                    </div>
                )}
            </div>
        </motion.article>
    );
};

export default ProjectCard;
