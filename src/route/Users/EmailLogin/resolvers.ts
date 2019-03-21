import { EmailLoginResponse, EmailLoginArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailLogin: async (
      _,
      args: EmailLoginArgs
    ): Promise<EmailLoginResponse> => {
      const { email, password } = args;
      try {
        const user = await Users.findOne({ email });
        if (!user) {
          return {
            result: false,
            error: "error",
            token: null
          };
        }
        if (password === user.password) {
          return {
            result: true,
            error: null,
            token: "true"
          };
        }
      } catch (error) {}
    }
  }
};

export default resolvers;
