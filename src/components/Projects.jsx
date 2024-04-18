import Project from "@/components/Project";
import projectData from "@/data/ProjectData";

const Projects = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center">
      {projectData.map((project, index) => (
        <Project key={index} className="" name={project.name} image={project.image} website={project.website} github={project.github} />
      ))}
    </div>
  )
}

export default Projects;