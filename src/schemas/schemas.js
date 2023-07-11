import joi from "joi";

export const userSingUp = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

export const loginSingIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

export const transaction = joi.object({
    value: joi.number().positive().required(),
    description: joi.string().required(),
    type: joi.string().required().valid("income", "expense"),
  });