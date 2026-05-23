
import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    connection_string:process.env.CONNECTION_STRING as string,
    jwt_secret:process.env.JWT_SECRET as string,
    jwtExpiresIn:process.env.JWT_EXPIRESIN as string
}

/* 
Initial Commit: feat: initialize backend project structure

Dependencies: chore: install express, dotenv, and cors dependencies

Server Setup: feat: setup basic express server and port configuration

Database: feat: configure database connection with mongoose

Middleware: feat: add error handling and logging middleware

Model: feat: create base user schema and models

Controller: feat: implement base controller logic for request handling

Routes: feat: define initial API routes and endpoint structure

Environment: chore: add environment variables template

Cleanup: refactor: clean up project structure and remove unused files
*/

export default config;