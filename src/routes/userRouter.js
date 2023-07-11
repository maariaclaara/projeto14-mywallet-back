import { Router } from "express";
import { userSingUp, loginSingIn } from "../schemas/schemas.js";
import { checkUser } from "../middleware/validation.js";
import { checkSchema } from "../middleware/validation.js"; 
import { login, register, logout } from "../controllers/users.js";

const userRouter = Router();

userRouter.post("/signIn", checkSchema(loginSingIn), login);
userRouter.post("/signUp", checkSchema(userSingUp), register);
userRouter.post("/logout", checkUser, logout);

export default userRouter;