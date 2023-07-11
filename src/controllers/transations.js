import dayjs from "dayjs";
import { db } from "../data/conection.js";

export async function newTransactions(req, res) {
  const { value, description, type } = req.body;
  const { userId } = res.locals.session;

  try {
    const transactions = {
      value: Number(value),
      description,
      type,
      userId,
      date: dayjs().valueOf(),
    };
    await db.collection("transactions").insertOne(transactions);
    res.sendStatus(201);
  } catch (error) {
    (error.message);
  }
}

export async function getTransactions(req, res) {
  const { userId } = res.locals.session;

  try {
    const transactions = await db.collection("transactions").find({ userId }).sort({ date: -1 }).toArray();

    res.send(transactions);
  } catch (error) {
    (error.message);
  }
}