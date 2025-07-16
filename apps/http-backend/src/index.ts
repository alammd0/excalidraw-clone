import express from "express"; 
import AuthRoutes from "./routes/authRoutes"

const app = express();
app.use(express.json());

app.use("/api/v1/auth", AuthRoutes);

app.listen(5000, () => console.log("http-backend listening on port 3000"));