import { Response, Request, NextFunction } from "express";
import { VerifyToken } from "../utils/password";

const AuhtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const signature = VerifyToken(req);
  if (signature) {
    return next();
  }
  return res.json({ message: "User Not Authorized" });
};

export default AuhtMiddleware;