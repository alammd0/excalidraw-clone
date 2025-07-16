import express, { Router } from "express";
import { createRoom, getChat } from "../controllers/room";
import { middleware } from "../middleware/middleware";

const router : Router = express.Router();

router.post("/create-room", middleware, createRoom);
router.get("/get-chat/:roomId", middleware, getChat);

export default router;