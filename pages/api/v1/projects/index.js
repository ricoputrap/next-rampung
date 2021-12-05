import { projects } from "../../../../data";
import { tasks } from "../../../../data";
import { getProjectStatistics } from "../helpers";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { getTasksByProjectId } from "../tasks";
import { getAllProjects } from "./helpers";

/**
 * Endpoint: `/api/v1/projects/`
 * @param {*} req 
 * @param {*} res 
 */
const handler = async (req, res) => {
    const db = await open({
        filename: "/tmp/database.db",
        driver: sqlite3.Database
    });

    if (req.method === "GET") {
        const projects = await getAllProjects(db);
        res.status(200).json(projects);
    }
}

export default handler;