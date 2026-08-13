import PROJECTS from "../../data/projects";
import { useT } from "../../i18n/useT";
import Section from "../layout/Section";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const { t } = useT();

    // Sem projetos cadastrados a seção inteira sai do ar, em vez de deixar
    // um cabeçalho solto com nada embaixo.
    if (PROJECTS.length === 0) return null;

    return (
        <Section id="projects" title={t("sections.projects")}>
            <div className="divide-y divide-line">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
