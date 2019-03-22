import {
  CreateLibraryArgs,
  CreateLibraryResponse
} from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Resolvers } from "../../../types/resolvers";
import { Librarys } from "../../../entity/Librarys";

const resolvers: Resolvers = {
  Mutation: {
    CreateLibrary: async (
      _,
      args: CreateLibraryArgs,
      { req }
    ): Promise<CreateLibraryResponse> => {
      try {
        await Librarys.create({
          name: args.name,
          users: req.id
        }).save();
        return {
          result: true,
          error: null
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
