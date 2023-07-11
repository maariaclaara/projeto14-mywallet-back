import db from "../data/conection"

export async function checkUser(req, res, next) {

  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  try {
    const operation = await db.collection("operations").findOne({ token });
    if (!operation) return res.sendStatus(401);

    res.locals.session = operation;

    next();
  } catch (err) {
    res.send(err.message);
  }
}

export function checkSchema(schema) {
    return (req, res, next) => {
      const check = schema.validate(req.body, { abortEarly: false });
  
      if (check.error) {
        const checkError = check.error.details.map((e) => e.message);
        return res.status(422).send(error);
      }
  
      next();
    };
  }