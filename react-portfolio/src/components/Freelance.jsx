import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import proempresarial from "../assets/freelance/proempresarial.png";
import oficinadosites from "../assets/freelance/oficinadosites.png";

const FREELANCE_PROJECTS = [
    {
        id: 1,
        title: "Pro Empresarial",
        description:
            "Professional landing page developed with React, TypeScript and Tailwind CSS. Deployed using Firebase Hosting with custom domain configuration through registro.br. Features modern design and responsive layout for business presentation.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Firebase Hosting",
        ],
        image: proempresarial,
        website_url: "https://proempresarial.com.br/",
    },
    {
        id: 2,
        title: "Oficina dos Sites",
        description:
            "Another professional landing page developed with React, TypeScript and Tailwind CSS. Deployed using Firebase Hosting with custom domain configuration through registro.br. Features modern design and responsive layout for business presentation.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Firebase Hosting",
        ],
        image: oficinadosites,
        website_url: "https://oficinadosites.com.br/",
    },
];

const Freelance = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasAnimated) {
                const freelanceSection =
                    document.getElementById("freelance-section");
                const rect = freelanceSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setHasAnimated(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasAnimated]);

    return (
        <div
            id="freelance-section"
            className="py-24 bg-white dark:bg-black transition-colors duration-300 relative"
        >
            <div className="max-w-6xl mx-auto">
                <div className="space-y-32">
                    {FREELANCE_PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            id={project.id}
                            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="space-y-3">
                                <h3 className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                                    {project.title}
                                </h3>
                                <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-snug max-w-2xl">
                                    {project.description.split(".")[0]}.
                                </p>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="lg:w-[35%] space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-4 py-2 text-sm font-light text-center h-9 flex items-center justify-center"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <a
                                        href={project.website_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm font-medium"
                                    >
                                        View Work
                                    </a>
                                </div>
                                <div className="lg:w-[65%] flex-shrink-0">
                                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                                        <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-4">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="h-full object-contain"
                                            />
                                            {project.secondaryImage && (
                                                <img
                                                    src={project.secondaryImage}
                                                    alt={`${project.title} - secondary`}
                                                    className="h-full object-contain"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Freelance;
