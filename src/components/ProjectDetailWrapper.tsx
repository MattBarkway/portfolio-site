import ProjectDetails from "./ProjectDetails";

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
  project: Project;
  onBack: () => void;
};

export default function ProjectDetailWrapper({ project, onBack }: Props) {
  return (
    <span>
      <button
        onClick={onBack}
        className="mt-6 rounded bg-gray-100 px-3 py-1 text-gray-900 hover:bg-gray-200"
      >
        ← Back
      </button>
      <ProjectDetails
        title={project.title}
        text={project.text}
        description={project.description}
        github_url={project.github_url}
        image={project.image}
        url={project.url}
      />
    </span>
  );
}
