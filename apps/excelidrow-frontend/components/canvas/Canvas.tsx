import { initDraw } from "@/drow/drow";
import { useEffect, useRef, useState } from "react";

export type tools = "rect" | "circle";

export default function Canvas({
  socket,
  roomId,
}: {
  socket: WebSocket;
  roomId: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTool, setSelectedTool] = useState<tools>("rect");

  useEffect(() => {
    // @ts-ignore
    window.selectedTool = selectedTool;
  }, [selectedTool]);

  useEffect(() => {
    if (canvasRef.current && socket) {
      initDraw(canvasRef.current, roomId, socket);
    }
  }, [roomId, socket]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="absolute left-5 top-10 flex gap-3">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedTool("rect")}>Rectangle</button>
        <button onClick={() => setSelectedTool("circle")}>Circle</button>
      </div>
      <canvas
        ref={canvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
        className="border overflow-hidden"
      />
    </div>
  );
}
