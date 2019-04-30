import { Resolvers } from "../../../types/resolvers";
import { UserFindResponse, UserFindArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import CreateJwt from "../../../helper/createjwt";

const resolvers: Resolvers = {
  Query: {
    UserFind: async (_, args: UserFindArgs): Promise<UserFindResponse> => {
      try {
        const user: Users = await Users.findOne({ userid: args.userid });
        if (!user) {
          return {
            result: false,
            error: "Not Found",
            token: undefined
          };
        }
        const token = CreateJwt(args.userid);
        return {
          result: true,
          error: undefined,
          token
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          token: undefined
        };
      }
    }
  }
};

export default resolvers;
