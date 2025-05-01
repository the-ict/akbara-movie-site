import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  lastname: string,
  email: string,
  phone: number,
  password: string
}

const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
}, {timestamps: true}); 

const UserModel = mongoose.model<IUser>("User", UserSchema);
export default UserModel;
