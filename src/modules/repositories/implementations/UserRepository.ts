import { Model } from "mongoose";

import { userModel, IUser } from "../../schemas/UserSchema";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Model<IUser>;
  constructor() {
    this.repository = userModel;
  }
  async findByName(username: string): Promise<IUser> {
    const user: IUser = await this.repository.findOne({ username }, [
      "username",
      "email",
    ]);
    return user;
  }
  async list(): Promise<IUser[]> {
    const users = await this.repository.find({}, ["username", "email"]);
    return users;
  }
  async create({ username, email, password }: ICreateUserDTO): Promise<IUser> {
    const user = await this.repository.create({
      username,
      email,
      password,
    });
    return user;
  }
}

export { UserRepository };
