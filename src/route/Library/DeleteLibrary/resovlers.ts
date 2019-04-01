import { Resolvers } from "../../../types/resolvers";
import {
  DeleteLibraryResponse,
  DeleteLibraryArgs
} from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Librarys } from "../../../entity/Librarys";

const resolvers: Resolvers = {
  Mutation: {
    DeleteLibrary: async (
      _,
      args: DeleteLibraryArgs,
      { req }
    ): Promise<DeleteLibraryResponse> => {
      const user: Users = req;
      try {
        const library = await Librarys.findOne(
          { id: args.id },
          { relations: ["users"] }
        );
        if (library) {
          if (library.users.id === user.id) {
            library.remove();
            return {
              result: true,
              error: undefined
            };
          } else {
            return {
              result: false,
              error: "not authentication"
            };
          }
        } else {
          return {
            result: false,
            error: "not exist"
          };
        }
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
