import Joi from "joi";

class CredentialsModel {
    public userName: string;
    public password: string;

    constructor(credentials: CredentialsModel) {
        this.userName = credentials.userName;
        this.password = credentials.password;
    };

    static credentialsSchema = Joi.object({
        userName: Joi.string().min(2).max(20).required(),
        password: Joi.string().min(8).max(128).required(),
    });

    public async validateCredentials(): Promise<any> {
        return CredentialsModel.credentialsSchema.validate(this);
    }

};

export default CredentialsModel;