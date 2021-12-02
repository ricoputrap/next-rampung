import { projects } from "../../../../data";

const handler = (req, res) => {
    if (req.method === "GET") {
        res.status(200).json(projects);
    }
}

export default handler;