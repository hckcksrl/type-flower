import * as jwt from "jsonwebtoken";
import { Users } from "../entity/Users";

const DecodeJwt = async (token: string): Promise<any> => {
  try {
    const decode = jwt.verify(token, "fkadsfjkjdhfkjsafakj" || "");
    const user: Users = await Users.findOne({
      where: {
        userid: parseInt(decode.toString())
      }
    });
    return user;
  } catch (error) {
    return error;
  }
};

export default DecodeJwt;
