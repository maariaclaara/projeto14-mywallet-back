import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoConect = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoConect.connect();
  console.log("MongoDB conectado!");
} catch (error) {
  console.log(error.message);
}

export const db = mongoConect.db();