import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { getAllTasks } from "./helpers";

const handler = async (req, res) => {
    const db = await open({
        filename: "/tmp/database.db",
        driver: sqlite3.Database
    });

    if (req.method === "GET") {
        const allTasks = await getAllTasks(db);
        res.status(200).json(allTasks);
    }
}

export default handler;