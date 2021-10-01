import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../schemas/UserSchema";

interface IRequest {
  username: string;
}

@injectable()
class FindUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute({ username }: IRequest): Promise<IUser> {
    const user = await this.userRepository.findByName(username);
    return user;
  }
}

export { FindUserUseCase };
