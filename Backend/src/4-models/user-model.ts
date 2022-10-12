import { RoleModel } from './role-model';
import mongoose from 'mongoose';


export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    userName: string;
    id: number;
    password: string;
    city: string;
    street: string;
    roleId: mongoose.Schema.Types.ObjectId;
}

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 20
    },
    id: {
        type: Number,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 128
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
})

UserSchema.virtual("role", {
    ref: RoleModel,
    localField: "roleId",
    foreignField: "_id",
    justOne: true
})

export const UserModel = mongoose.model<IUserModel>('UserModel', UserSchema, "user");

// לקוח : שם, שם משפחה, שם משתמש-אימייל, תעודת זהות(PK), סיסמא, עיר, רחוב