import express from "express";
import { userRoutes } from "./Routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
