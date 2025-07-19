"use client";
import { WS_URL } from "@/config";
import { useEffect, useState } from "react";
import Canvas from "./Canvas";

export default function CanvasRoom({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWRraGFsaWRhbGFtQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWxhbSIsImlhdCI6MTc1MjkwNTg2NH0.R4ho0VTIc7RohQcHiZTOvq4w_nTb1Xp2q_mC7QqQQrE`
    );

    ws.onopen = () => {
      setSocket(ws);
      const data = JSON.stringify({
        type: "join_room",
        roomId : Number(roomId)
      });
      ws.send(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  if (!socket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white h-screen">
      <Canvas socket={socket} roomId={roomId} />
    </div>
  );
}
