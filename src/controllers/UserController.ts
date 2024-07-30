import { request, Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name) {
      return response
        .status(400)
        .json({ message: "Bad request: name is mandatory" });
    } else if (!user.email) {
      return response
        .status(400)
        .json({ message: "Bad request: email is mandatory" });
    } else {
      this.userService.createUser(user.name, user.email);
      return response.status(201).json({ message: "user created" });
    }
  };

  getAllusers = (request: Request, response: Response) => {
    const users = this.userService.getAllusers();
    return response.status(200).json(users);
  };

  deleteUser = (request: Request, response: Response) => {
    const userToDelete = request.body;
    console.log('o usuário para deletar é:',userToDelete);
    this.userService.deleteUser(userToDelete.name);

    return response.status(200).json({ message: "user deleted" });
  };
}
