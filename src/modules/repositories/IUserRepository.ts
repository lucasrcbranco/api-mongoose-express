import { Model } from "mongoose";

import { IUser } from "../schemas/UserSchema";

interface ICreateUserDTO {
  username: string;
  email: string;
  password: string;
}
interface IUserRepository {
  findByName(name: string): Promise<IUser>;
  list(): Promise<IUser[]>;
  create({ username, email, password }: ICreateUserDTO): Promise<IUser>;
}

export { IUserRepository, ICreateUserDTO };
