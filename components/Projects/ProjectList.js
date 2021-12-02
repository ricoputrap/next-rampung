import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {

    return (
        <div className="flex flex-wrap">
            { projects.map(project => (
                <ProjectCard
                    key={ project.id }
                    title={ project.title }
                    statistics={ project.statistics }
                />
            ))}
        </div>
    )
}

export default ProjectList;