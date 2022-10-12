import { UserModel } from './../4-models/user-model';
import express, { NextFunction, Request, Response } from "express";
import CredentialsModel from "../4-models/credentials-model";
import authLogic from "../5-logic/auth-logic";

const router = express.Router();

router.post("/auth/login", async (request: Request, response: Response, next: NextFunction) => {
    try {
        // console.log(request.body);
        const credentials = new CredentialsModel(request.body);
        // console.log(credentials);
        const token = await authLogic.login(credentials);
        response.json(token);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/auth/register", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.roleId = "62dbc8b74e209243b6fc02a9";
        const user = new UserModel(request.body);
        const token = await authLogic.registerUser(user);
        response.json(token);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/auth/:checkUserName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userName = request.params.checkUserName;
        const userExists = await authLogic.checkUserName(userName);
        response.json(userExists);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;


