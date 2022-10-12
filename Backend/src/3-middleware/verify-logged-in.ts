import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";


export async function verifyLoggedIn(request: Request, response: Response, next: NextFunction) {
    try {
        await cyber.verifyToken(request);
        next();
    } catch (error) {
        console.log("error")
        next(error);
    }
}
