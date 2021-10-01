import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUserUseCase } from "./FindUserUseCase";

class FindUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    const findUserUseCase = container.resolve(FindUserUseCase);

    const user = await findUserUseCase.execute({ username });

    return res.status(201).json(user);
  }
}

export { FindUserController };
