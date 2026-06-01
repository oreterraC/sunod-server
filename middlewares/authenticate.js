import jwt from "jsonwebtoken";

export const authenticate = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.sendStatus(401);
  }
  const token = authHeader.split(" ")[1];
  try {
    request.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return response.sendStatus(401);
  }
};
