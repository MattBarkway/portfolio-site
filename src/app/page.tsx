"use client";
import { useProjects } from "@/hooks/useProjects";
import Canvas from "@/components/Canvas";
import { AnimatePresence, motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectDetailWrapper from "@/components/ProjectDetailWrapper";

const FADE_DURATION = 0.3;

export default function Page() {
  const {
    chunkedProjects,
    activeProject,
    activeProjectName,
    openProject,
    closeProject,
  } = useProjects(3);

  return (
    <div className="relative z-10 p-4 max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        {activeProject && activeProjectName ? (
          <motion.div
            key={activeProject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: FADE_DURATION }}
            className="text-white"
          >
            <ProjectDetailWrapper
              key={activeProject.name}
              project={activeProject}
              onBack={closeProject}
            />
          </motion.div>
        ) : (
          <motion.div
            key="project-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: FADE_DURATION }}
            className="text-white"
          >
            <PageIntro />
            <ProjectGrid
              chunkedProjects={chunkedProjects}
              onProjectClick={openProject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
