import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  title: string;
  text: string;
  description?: string;
  github_url?: string;
  image?: string;
  url?: string;
};

type Props = {
  chunkedProjects: Project[][];
  onProjectClick: (name: string) => void;
};

export default function ProjectGrid({
  chunkedProjects,
  onProjectClick,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {chunkedProjects.map((chunk) =>
        chunk.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.title}
            description={project.description??""}
            onClick={() => onProjectClick(project.name)}
            show={true}
          />
        )),
      )}
    </div>
  );
}
