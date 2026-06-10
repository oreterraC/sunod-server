import { register, login } from "../services/auth.service.js";

export const signUp = async (request, response) => {
  try {
    const token = await register(request.body.username, request.body.password);
    response.status(201).json({ token });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export const signIn = async (request, response) => {
  try {
    const token = await login(request.body.username, request.body.password);
    response.json({ token });
  } catch (error) {
    response.status(401).json({
      message: error.message,
    });
  }
};
