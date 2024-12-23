import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../Controller/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/create", createUser);
userRoutes.post("/login", loginUser);
// userRoutes.get("/list", getUsers);
userRoutes.delete("/delete", deleteUser);
userRoutes.put("/update", updateUser);

export { userRoutes };
