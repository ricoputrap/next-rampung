import styles from "../../styles/ProjectCard.module.css"

const ProjectCard = ({ title, statistics }) => {
    
    return (
        <div className={ styles.card }>
            <h2>{ title }</h2>

            <div className={ styles.statistic }>
                {statistics && statistics.map(data => (
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