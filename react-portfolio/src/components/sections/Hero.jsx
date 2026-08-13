import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SITE } from "../../config/site";
import { useT } from "../../i18n/useT";
import Container from "../layout/Container";

const rise = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    },
});

const Hero = () => {
    const { t } = useT();

    return (
        <Container
            as="section"
            // svh em vez de vh: no mobile, `100vh` fica atrás da barra de
            // endereço do navegador e empurra conteúdo para fora da tela.
            className="relative flex min-h-[68svh] flex-col justify-center py-24 sm:min-h-[76svh]"
        >
            <div className="flex flex-col items-center text-center">
                <motion.p
                    variants={rise(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-meta text-muted sm:text-base"
                >
                    {t(SITE.jobTitle ?? SITE.role)}
                </motion.p>

                <motion.h1
                    variants={rise(0.1)}
                    initial="hidden"
                    animate="visible"
                    // O nome é o único elemento em escala de display, e em peso
                    // regular — no design ele não é bold.
                    className="mt-2 text-balance font-normal tracking-[-0.03em] text-fg"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", lineHeight: 1.08 }}
                >
                    {SITE.name}
                </motion.h1>
            </div>

            {/* Fora do fluxo de propósito: no fluxo, a altura deste bloco entrava
                na conta do `justify-center` e empurrava o nome para cima, deixando
                mais respiro embaixo do que em cima. */}
            <motion.div
                variants={rise(0.25)}
                initial="hidden"
                animate="visible"
                className="absolute inset-x-5 bottom-10 flex justify-start sm:inset-x-8 lg:justify-end"
            >
                <div className="border-l border-rule pl-4">
                    <Link
                        to="/about"
                        className="text-meta text-body underline underline-offset-2 transition-colors hover:text-fg"
                    >
                        {t("hero.more")} →
                    </Link>
                </div>
            </motion.div>
        </Container>
    );
};

export default Hero;
