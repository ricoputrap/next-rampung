const { open } = require("sqlite");
const sqlite3 = require("sqlite3")

const setup = async () => {
    const db = await open({
        filename: "/tmp/database.db",
        driver: sqlite3.Database
    });
    await db.migrate({ force: true });
}

setup();