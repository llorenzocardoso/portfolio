import { SITE } from "../config/site";
import { getAboutIntro, getAboutSections } from "../content/about";
import { useT } from "../i18n/useT";
import Container from "../components/layout/Container";
import Accordion from "../components/ui/Accordion";

const About = () => {
    const { language } = useT();

    return (
        <Container className="py-16 sm:py-24">
            <div className="mx-auto w-full max-w-2xl">
                <h1 className="mb-6 text-3xl font-semibold text-fg sm:text-4xl">
                    {SITE.name.split(" ")[0]}
                </h1>

                <p className="mb-10 text-base leading-relaxed text-body sm:text-lg">
                    {getAboutIntro(language)}
                </p>

                <div className="border-t border-line">
                    {getAboutSections(language).map((section) => (
                        <Accordion
                            key={section.id}
                            id={section.id}
                            title={section.title}
                        >
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </Accordion>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default About;
