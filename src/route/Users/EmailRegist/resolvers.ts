import { EmailRegistArgs, EmailRegistResonse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Resolvers } from "../../../types/resolvers";
import CreateJwt from "../../../helper/createjwt";

const resolvers: Resolvers = {
  Mutation: {
    EmailRegist: async (
      _,
      args: EmailRegistArgs
    ): Promise<EmailRegistResonse> => {
      const { email, password } = args;
      try {
        const user: Users = await Users.findOne({ email });
        if (user) {
          return {
            result: false,
            error: "user exist",
            token: null
          };
        } else {
          const regist: Users = await Users.create({ ...args }).save();
          const token: string = CreateJwt(regist.email);
          return {
            result: true,
            error: null,
            token
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
