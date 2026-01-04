import { NextFunction, Response, Request } from "express";

export const AdminAuth = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;
  if (user.role === "admin") {
    return next();
  }
  return res.json({ message: "User Not Authorized" });
};
