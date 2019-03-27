import { EmailLoginResponse, EmailLoginArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Resolvers } from "../../../types/resolvers";
import CreateJwt from "../../../helper/createjwt";

const resolvers: Resolvers = {
  Mutation: {
    EmailLogin: async (
      _,
      args: EmailLoginArgs
    ): Promise<EmailLoginResponse> => {
      const { email, password } = args;
      try {
        const user: Users = await Users.findOne({ email });
        if (!user) {
          return {
            result: false,
            error: "not exist",
            token: null
          };
        }
        if (password === user.password) {
          const token: string = CreateJwt(user.email);
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
