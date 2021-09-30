import bcrypt from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../schemas/UserSchema";

interface IRequest {
  username: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ username, email, password }: IRequest): Promise<IUser> {
    const salt = await bcrypt.genSalt(8);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await this.userRepository.create({
      username,
      email,
      password: encryptedPassword,
    });

    return user;
  }
}

export { CreateUserUseCase };
