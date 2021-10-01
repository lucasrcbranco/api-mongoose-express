import { Router } from "express";

import { CreateUserController } from "../modules/useCases/createUser/CreateUserController";
import { FindUserController } from "../modules/useCases/findUser/FindUserController";
import { ListUserController } from "../modules/useCases/listUser/ListUserController";

const userRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const findUserController = new FindUserController();

userRoutes.post("/new", createUserController.handle);
userRoutes.get("/list", listUserController.handle);
userRoutes.get("/:username", findUserController.handle);

export { userRoutes };
