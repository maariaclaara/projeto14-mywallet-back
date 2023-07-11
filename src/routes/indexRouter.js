import { Router } from "express";
import userRouter from "./userRouter.js";
import transactionsRouter from "./transactionsRouter.js";

const router = Router();
router.use(userRouter);
router.use(transactionsRouter)

export default router;

