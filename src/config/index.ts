
import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    connection_string: process.env.CONNECTION_STRING as string,
    jwt_secret: process.env.JWT_SECRET as string,
    jwtExpiresIn: process.env.JWT_EXPIRESIN as string
}

export default config;