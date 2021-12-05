import { getProjectStatistics } from "../helpers";
import { getAllTasks } from "../tasks/helpers";

export const getAllProjects = async (db) => {
    const projects = await db.all(`
        SELECT * FROM PROJECT
        WHERE archived = 0
    `);

    const tasks = await getAllTasks(db);

    const computedProjects = projects.map(project => {
        return {
            ...project,
            statistics: getProjectStatistics(project.id, tasks)
        }
    })
    
    return computedProjects;
}

export const getProjectById = async (db, projectId) => {
    const project = await db.get(`
        SELECT * FROM PROJECT
        WHERE id = ?
    `, [projectId]);

    return project;
}