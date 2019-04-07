import { Resolvers } from "../../../types/resolvers";
import { GetUsersResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Query: {
    GetUsers: async (_, __, { req }): Promise<GetUsersResponse> => {
      const user: Users = req;
      return {
        result: true,
        error: undefined,
        users: user
      };
    }
  }
};

export default resolvers;
