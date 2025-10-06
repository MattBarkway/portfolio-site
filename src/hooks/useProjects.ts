"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProjectsJSON from "@/json/projects.json";

export type Project = {
  name: string;
  title: string;
  text: string;
  description?: string;
  github_url?: string;
  image?: string;
  url?: string;
  buttonText?: string;
};

export function useProjects(colCount: number = 3) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [chunkedProjects, setChunkedProjects] = useState<Project[][]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeProjectName, setActiveProjectName] = useState<string>("");

  const chunkArray = (array: Project[], chunkSize: number) => {
    const chunks: Project[][] = [];
    const copy = [...array];
    while (copy.length > 0) chunks.push(copy.splice(0, chunkSize));
    return chunks;
  };

  useEffect(() => {
    setProjects(ProjectsJSON as Project[]);
    setChunkedProjects(chunkArray(ProjectsJSON as Project[], colCount));

    const params = new URLSearchParams(window.location.search);
    const projectName = params.get("project") || "";

    if (projectName) {
      const match = (ProjectsJSON as Project[]).find(
        (p) => p.name === projectName,
      );
      if (match) {
        setActiveProjectName(projectName);
        setActiveProject(match);
      } else {
        setActiveProjectName("");
        setActiveProject(null);
        window.history.replaceState({}, "", "/");
        toast.error("I haven't made that one yet");
      }
    }
  }, [colCount]);

  const openProject = (name: string) => {
    const project =
      (ProjectsJSON as Project[]).find((p) => p.name === name) || null;
    setActiveProjectName(name);
    setActiveProject(project);
    const url = name ? `/?project=${name}` : "/";
    window.history.pushState({}, "", url);
  };

  const closeProject = () => {
    setActiveProjectName("");
    setActiveProject(null);
    const url = "/";
    window.history.pushState({}, "", url);
  };

  return {
    projects,
    chunkedProjects,
    activeProject,
    activeProjectName,
    openProject,
    closeProject,
  };
}
