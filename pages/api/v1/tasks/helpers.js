export const getAllTasks = async (db) => {
    const tasks = await db.all(`
        SELECT * FROM TASK
    `);
    
    return tasks;
}

export const getTasksByProjectId = async (db, projectId) => {
    const tasksByProjectId = await db.all(`
        SELECT * FROM TASK
        WHERE project_id = ?
    `, [projectId]);

    return tasksByProjectId;
}

export const getTaskById = async (db, taskId) => {
    const task = await db.get(`
        SELECT * FROM TASK
        WHERE id = ?
    `, [taskId]);

    return task;
}