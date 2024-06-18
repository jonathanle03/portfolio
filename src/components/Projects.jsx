import Project from "./Project";
import projectData from "@/data/ProjectData";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="flex flex-col w-10/12">
      <Title text="Projects" />
      <div className="flex gap-x-1 border flex-nowrap overflow-x-auto overflow-y-hidden">
        {projectData.map((project, index) => (
          <Project
            key={index}
            className=""
            name={project.name}
            image={project.image}
            website={project.website}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
