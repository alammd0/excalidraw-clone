import { HTTP_URL } from "../config";
import axios from "axios";

export async function getExistingShape(roomId: number) {
  const res = await axios.get(`${HTTP_URL}/api/v1/room/get-chat/${roomId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWRraGFsaWRhbGFtQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWxhbSIsImlhdCI6MTc1MjkwNTg2NH0.R4ho0VTIc7RohQcHiZTOvq4w_nTb1Xp2q_mC7QqQQrE",
    },
  });

  const messages = res.data.data;    

  const shapes = messages.map((x: { message: string }) => {
    console.log(x);
    const messageData = JSON.parse(x.message);
    return messageData.shape;
  });

  return shapes;
}
