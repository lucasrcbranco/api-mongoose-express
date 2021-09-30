import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../schemas/UserSchema";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<IUser[]> {
    const users = await this.userRepository.list();
    return users;
  }
}

export { ListUserUseCase };
