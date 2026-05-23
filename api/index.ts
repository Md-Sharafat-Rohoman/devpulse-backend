import app from "../src/app";
import { initDB } from "../src/db";


// Initialize the database tables/migrations on startup
initDB();

export default app;
