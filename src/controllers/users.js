import bcrypt from "bcrypt";
import  { db }  from "../data/conection.js";
import { v4 as uuid } from "uuid";

// LOGIN
export async function login(req, res) {
    const { email, password } = req.body;
  
    try {
      const userExist = await db.collection("users").findOne({ email });
      if (!userExist) return res.status(404).send("Not Found");
  
      const correctPassword = bcrypt.compareSync(password, userExist.password);
      if (!correctPassword) return res.status(401).send("Unauthorized");
  
      const token = uuid();
      await db.collection("operations").insertOne({ token, userId: userExist._id });
      res.send({ token, userName: userExist.name });
    } catch (error) {
      res.send(err.message);
    }
  }
  
  
  // CADASTRO
  export async function register(req, res) {
    const { name, email, password } = req.body;
  
    try {
      const emailExist = await db.collection("users").findOne({ email });
      if (emailExist) return res.status(409).send("Conflict!");
  
      const crypt = bcrypt.hashSync(password, 10);
  
      await db.collection("users").insertOne({ name, email, password: hash });
      res.sendStatus(201);
    } catch (error) {
      res.send(error.message);
    }
  }
  
  
  
  // LOGOUT
  export async function logout(req, res) {
    const { token } = res.locals.session;
  
    try {
      await db.collection("operations").deleteOne({ token });
      res.sendStatus(200);
    } catch (error) {
      res.send(error.message);
    }
  }