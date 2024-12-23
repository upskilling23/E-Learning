import UserService from "../service/user.service.js";

const userService = new UserService();
const createUser = (req, res) => {};
const loginUser = async (req, res) => {
  console.log(`executing login user`);
  const result = await userService.loginUser(req);
  res.status(result.status).json(result.data);
  console.log(`executed login user`);
};
const getUsers = async (req, res) => {
  console.log(`executing get user`);
  const result = await userService.getAllUsers(req);
  res.status(result.status).json(result.data);
  console.log(`executed get user`);
};
const deleteUser = (req, res) => {};
const updateUser = (req, res) => {};
export { createUser, loginUser, getUsers, deleteUser, updateUser };
