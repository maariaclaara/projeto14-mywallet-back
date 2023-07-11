import { Router } from "express";
import { userSingUp, loginSingIn } from "../schemas/schemas";
import { checkUser, checkSchema } from "../middleware/validation";
import { login, register, logout } from "../controllers/users";

const routers = Router();

routers.post("/signIn", checkSchema(loginSingIn), login);
routers.post("/signUp", checkSchema(userSingUp), register);
routers.post("/logout", checkUser, logout);

const router = Router();
router.use(routers);

export default router;

