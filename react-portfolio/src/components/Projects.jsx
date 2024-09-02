import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated) {
        const projectSection = document.getElementById("projects-section");
        const rect = projectSection.getBoundingClientRect();
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
    <div id="projects-section" className="pb-20 flex flex-col items-center">
      <h2 className="mb-10 mt-6 uppercase tracking-wider text-center text-xl font-semibold text-zinc-900">Projects</h2>
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          id={project.id}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="p-10 w-full max-w-5xl mb-16"
          style={{ minHeight: '600px' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">{project.title}</h3>
              <p className="text-neutral-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-neutral-200 text-neutral-700 rounded px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 text-white px-4 py-2 rounded">View on GitHub</a>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row justify-center h-full">
              <div className="p-2 w-full max-w-4xl h-auto flex flex-col md:flex-row justify-center items-center gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-2/5 max-h-full object-contain rounded-md"
                />
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary`}
                  className="w-full md:w-2/5 max-h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
