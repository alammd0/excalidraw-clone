import express from "express"; 
import authRoutes from "./routes/authRoutes"
import roomRoutes from "./routes/roomRoutes"

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/room", roomRoutes);

app.listen(5000, () => console.log("http-backend listening on port 5000"));