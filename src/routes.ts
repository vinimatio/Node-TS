import { Request, Response, Router } from "express";
import { UserController } from "../src/controllers/UserController";

export const router = Router();
const userController = new UserController();

router.post("/user", userController.createUser);
router.get("/user", userController.getAllusers);
router.delete("/user", userController.deleteUser);
