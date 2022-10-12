import { IUserModel } from './../4-models/user-model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Request } from 'express';
import { UnauthorizedError } from '../4-models/error-models';

// token secret string.
const secret = "our market is the best"

// hashing salt
const salt = "users love eating"

async function createNewToken(user: IUserModel): Promise<string> {
    const payload = { user }
    const token = jwt.sign(payload, secret, { expiresIn: "2y" })

    return token
}

async function verifyToken(request: Request): Promise<boolean> {

    const header = request.headers.authorization

    return new Promise<boolean>((res, rej) => {

        if (!header) {
            rej(new UnauthorizedError("no data sent from headers"))
            return
        }

        const token = header.substring(7);

        if (!token) {
            rej(new UnauthorizedError("token is missing or isn't correct"))
            return
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                rej(new UnauthorizedError("token is incorrect"))
                return
            }
            res(true)
        })

    })

}

function extractRole(request: Request): any {
    const header = request.headers.authorization
    if (!header) throw new UnauthorizedError("no data sent from headers")

    const token = header.substring(7)
    if (!token) throw new UnauthorizedError("token is missing or isn't correct")

    const user: IUserModel = (jwt.decode(token) as any).user;
    if (!user) throw new UnauthorizedError("token is incorrect")

    return user.roleId;
}

function extractUser(request: Request): IUserModel {
    const header = request.headers.authorization
    console.log(header)
    if (!header) throw new UnauthorizedError("no data sent from headers")

    const token = header.substring(7)
    if (!token) throw new UnauthorizedError("token is missing or isn't correct")

    const user: IUserModel = (jwt.decode(token) as any).user;
    if (!user) throw new UnauthorizedError("token is incorrect")

    return user;
}

async function hash(plainText: string): Promise<string> {
    if (!plainText) return null;
    const hashedText = crypto.createHmac('sha512', salt).update(plainText).digest('hex');
    return hashedText;
}

export default {
    createNewToken,
    verifyToken,
    extractRole,
    hash,
    extractUser
}