import * as jwt from "jsonwebtoken";
import { Users } from "../entity/Users";

const DecodeJwt = async (token: string): Promise<any> => {
  try {
    const decode = jwt.verify(token, "1234" || "");
    const user = await Users.findOne({
      where: {
        email: decode.toString()
      }
    });
    return user;
  } catch (error) {
    return error;
  }
};

export default DecodeJwt;
