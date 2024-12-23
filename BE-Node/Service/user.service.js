import { generateToken } from "../common/jwt.js";
import { userModel } from "../schemas/user.schema.js";
export default class UserService {
  getAllUsers = async () => {
    try {
      let result = await userModel.find();
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      console.log("error occured while getting user list");
    }
  };

  loginUser = async (req) => {
    try {
      const { name, password } = req.body;
      if (!name || !password)
        return {
          status: 400,
          data: `username and password is required for login`,
        };

      let user = await userModel.findOne({
        nickName: name,
        password: password,
      });
      if (!user) {
        return {
          status: 400,
          data: `user doesn't exist!!!`,
        };
      }
      let token = await generateToken();
      console.log(token);
      return { status: 200, data: token };
    } catch (error) {
      console.log("error occured while login user");
    }
  };
}
