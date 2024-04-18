import Project from "@/components/Project";
import projectData from "@/data/ProjectData";

const Projects = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <Project key={index} className="" name={project.name} image={project.image} />
      ))}
    </div>
  )
}

export default Projects;