import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controller/user.controller.js";
import { verifToken } from "../common/jwt.js";

const userRoutes = express.Router();

userRoutes.post("/create", verifToken, createUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/list", verifToken, getUsers);
userRoutes.delete("/delete", verifToken, deleteUser);
userRoutes.put("/update", verifToken, updateUser);

export { userRoutes };
