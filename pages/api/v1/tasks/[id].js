import { open } from "sqlite";
import sqlite3 from "sqlite3"
import { getTaskById } from "./helpers";

const handler = async (req, res) => {
    const db = await open({
        filename: "/tmp/database.db",
        driver: sqlite3.Database
    });

    if (req.method === "GET") {
        const taskId = req.query.id;
        const task = await getTaskById(db, taskId);

        res.status(200).json(task);
    }
}

export default handler;