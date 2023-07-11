import { Router } from "express";
import { newTransactions, getTransactions } from "../controllers/transations.js";
import { checkUser } from "../middleware/validation.js";
import { checkSchema } from "../middleware/validation.js";
import { transaction } from "../schemas/schemas.js";

const transactionRouter = Router();

transactionRouter.use(checkUser);

transactionRouter.post("/transactions", checkSchema(transaction), newTransactions);
transactionRouter.get("/transactions", getTransactions);

export default transactionRouter;