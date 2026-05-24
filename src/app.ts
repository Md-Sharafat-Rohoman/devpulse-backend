import express, { type Application, type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";
import { authRouter } from "./modules/auth/auth.route";
import { issuesRouter } from "./modules/issues/issues.router";
import { sendSuccess } from "./utils/response";
const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    sendSuccess(res, StatusCodes.OK, 'Issue updated successfully')
})

app.use('/api/auth', authRouter);
app.use('/api/issues', issuesRouter);

export default app;