import {
  CreateLibraryArgs,
  CreateLibraryResponse
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Librarys } from "../../../entity/Librarys";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    CreateLibrary: async (
      _,
      args: CreateLibraryArgs,
      { req }
    ): Promise<CreateLibraryResponse> => {
      const user: Users = req;
      try {
        await Librarys.create({
          name: args.name,
          users: user
        }).save();
        return {
          result: true,
          error: undefined
        };
      } catch (error) {
        return {
          result: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
