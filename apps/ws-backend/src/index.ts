import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prisma } from "@repo/db/db";
import WebSocket from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

const users: User[] = [];

function checkUserAuth(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string" || !decoded || !decoded.userId) {
      return null;
    }

    return decoded.userId;
  } catch (e) {
    return null;
  }
}

wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUserAuth(token);

  if (userId === null) {
    ws.close();
    return;
  }

  users.push({ userId, rooms: [], ws });

  ws.on("message", async (message) => {
    let data;

    if (typeof message !== "string") {
      data = JSON.parse(message.toString());
    } else {
      data = JSON.parse(message);
    }

    if (data.type === "join_room") {
      const user = users.find((x) => x.ws === ws);
      user?.rooms.push(data.roomId);
    }

    if (data.type === "leave_room") {
      const user = users.find((x) => x.ws === ws);
      console.log("user", user);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter((x) => x === data.room);
    }

    console.log("message data", data);

    if (data.type === "chat") {
      const roomId = data.roomId;
      const message = data.message;

      await prisma.chat.create({
        data: {
          roomId : Number(roomId),
          userId: Number(userId),
          message,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({ type: "chat", message: message, roomId })
          );
        }
      });
    }
  });
});
