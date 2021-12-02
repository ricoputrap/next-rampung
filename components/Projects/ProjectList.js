import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {

    return (
        <div className="flex flex-wrap">
            { projects.map(project => (
                <ProjectCard
                    key={ project.id }
                    title={ project.title }
                    statistic={[
                    { label: "Todo", value: 21 },
                    { label: "In Progress", value: 9 },
                    { label: "To Review", value: 3 },
                    { label: "Done", value: 14 },
                    ]}
                />
            ))}
        </div>
    )
}

export default ProjectList;