import { ValidationError } from './../4-models/error-models';
import { UserModel, IUserModel } from './../4-models/user-model';
import CredentialsModel from '../4-models/credentials-model';
import cyber from '../2-utils/cyber';
import { UnauthorizedError } from '../4-models/error-models';

async function login(credentials: CredentialsModel): Promise<string> {

    // joi validation of user credentials
    const result = await credentials.validateCredentials();

    if (result.error) {
        throw new ValidationError(result.error.message);
    }

    credentials.password = await cyber.hash(credentials.password);
    const user = await UserModel.find({ userName: credentials.userName, password: credentials.password }).populate("role").exec();
    if (user.length === 0) {
        throw new UnauthorizedError("User not found");
    }
    const token = await cyber.createNewToken(user[0]);
    return token;
}

async function registerUser(user: IUserModel): Promise<string> {
    user.password = await cyber.hash(user.password);
    const newUser = await user.save();
    const token = await cyber.createNewToken(newUser);
    return token;
}

async function checkUserName(userName: string): Promise<boolean> {
    return (await UserModel.find({ userName: userName }).exec()).length > 0;
}

export default {
    login,
    registerUser,
    checkUserName
};

