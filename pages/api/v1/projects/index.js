import { projects } from "../../../../data";
import { tasks } from "../../../../data";
import { getProjectStatistics } from "../helpers";

const handler = (req, res) => {
    if (req.method === "GET") {

        const computedProjects = projects.map(project => {
            return {
                ...project,
                statistics: getProjectStatistics(project.id, tasks)
            }
        })
        
        res.status(200).json(computedProjects);
    }
}

export default handler;