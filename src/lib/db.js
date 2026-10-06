import Database from "better-sqlite3";
import { resolve } from "node:path";

const dbPath = resolve(
  process.cwd(),
  import.meta.env.SQLITE_DB_PATH || "data/clients.db"
);

const db = new Database(dbPath);

export function getClients() {
  const statement = db.prepare(`
    SELECT
      id,
      name,
      email,
      address,
      latitude,
      longitude
    FROM clients
    ORDER BY name
  `);

  return statement.all();
}

export default db;