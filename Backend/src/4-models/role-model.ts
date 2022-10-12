import mongoose  from 'mongoose';

export interface IRoleModel extends mongoose.Document {
    name: string;
}

export const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export const RoleModel = mongoose.model<IRoleModel>('RoleModel', RoleSchema, "role");