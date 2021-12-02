import styles from "../../styles/ProjectCard.module.css"

const ProjectCard = ({ title, statistic }) => {
    
    return (
        <div className={ styles.card }>
            <h2>{ title }</h2>

            <div className={ styles.statistic }>
                {statistic.map(data => (
                    <div key={ data.label }>
                        <span>{ data.label }</span>
                        <span>{ data.value }</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;