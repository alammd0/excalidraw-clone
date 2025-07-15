import express, { Router } from "express";
import { login, signup } from "../controllers/auth";

const router: Router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
