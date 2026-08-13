import Container from "./Container";

/**
 * Bloco de conteúdo com a régua vertical do site.
 *
 * O rótulo segue o design: um traço curto acima de um texto curto em caixa
 * alta e negrito, centralizado — e uma linha o separa do conteúdo, como no
 * layout original.
 *
 * O conteúdo não recebe padding vertical próprio: quem vive aqui dentro
 * (os projetos) já traz o seu, e somar os dois abria um buraco.
 */
const Section = ({ id, title, className = "", children }) => (
    <section id={id} className={`border-t border-line ${className}`}>
        {title && (
            <div className="border-b border-line">
                <Container className="py-12 sm:py-16">
                    <div className="flex flex-col items-center gap-2">
                        <span aria-hidden="true" className="h-px w-6 bg-fg" />
                        <h2 className="text-meta font-semibold uppercase text-fg sm:text-base">
                            {title}
                        </h2>
                    </div>
                </Container>
            </div>
        )}
        {/* Sem Container aqui: os divisores entre os itens precisam correr
            de ponta a ponta do frame, então o gutter é responsabilidade de
            cada item. */}
        {children}
    </section>
);

export default Section;
