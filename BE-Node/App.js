import express from "express";
import { connectDb } from "./db/connect.db.js";
import { userRoutes } from "./routes/user.routes.js";
const app = express();

app.use(express.json());

app.use("/user", userRoutes);
connectDb();
app.listen(process.env.PORT, async () => {
  console.log(`server running on port ${process.env.PORT}`);
});
