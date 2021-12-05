import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { getTasksByProjectId } from "../tasks/helpers";
import { getProjectById } from "./helpers";


const handler = async (req, res) => {
    const db = await open({
        filename: "/tmp/database.db",
        driver: sqlite3.Database
    });

    if (req.method === "GET") {
        const projectId = req.query.id;
        const project = await getProjectById(db, projectId);
        const tasks = await getTasksByProjectId(db, projectId);

        const result = {
            ...project,
            tasks
        }

        res.status(200).json(result);
    }
}

export default handler;