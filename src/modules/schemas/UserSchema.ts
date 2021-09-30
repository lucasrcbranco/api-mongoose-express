import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const schema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = model<IUser>("User", schema);

export { userModel, IUser };
