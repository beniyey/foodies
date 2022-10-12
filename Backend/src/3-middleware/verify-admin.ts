import { Role } from './../4-models/role-interface';
import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";
import { UnauthorizedError } from '../4-models/error-models';

export async function verifyAdmin(request: Request, response: Response, next: NextFunction) {
    try {
        const userRole = cyber.extractRole(request);
        if (userRole == Role.Admin) {
            next();
        } else {
            throw new UnauthorizedError("user is not authorized for the operation, please send a message to admin to authorize the request")
        }

    } catch (error) {
        next(error);
    }
}