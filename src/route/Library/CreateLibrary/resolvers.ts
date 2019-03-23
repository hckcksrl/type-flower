import {
  CreateLibraryArgs,
  CreateLibraryResponse
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Librarys } from "../../../entity/Librarys";
import { DeepPartial } from "typeorm";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    CreateLibrary: async (
      _,
      args: CreateLibraryArgs,
      { context }
    ): Promise<CreateLibraryResponse> => {
      const user: DeepPartial<Users> = context;
      try {
        await Librarys.create({
          name: args.name,
          users: user
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
