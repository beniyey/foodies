import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"

async function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    console.log(err);

    const status = err.status || 500;
    const message = err.message || "Unknown Error";

    // log errors for developers
    if (status === 500) {
        fs.appendFile("src/2-utils/error-logging.txt",
            `${new Date().toLocaleString()} - ${status} - ${message} - ${request.method} - ${request.url} - ${request.ip} - ${request.headers["user-agent"]}
    `);
    }

    response.status(status).send(message);
}

export default catchAll;