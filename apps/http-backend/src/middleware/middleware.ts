import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";

export const middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.body?.token ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.cookies?.token;

    // console.log("token is missing", token);
    
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Authorization token is missing",
      });
    }

    if (!JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "JWT secret is not configured",
      });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log(decoded);
      (req as any).user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
    
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal authentication error",
    });
  }
};
