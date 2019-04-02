import { Resolvers } from "../../../types/resolvers";
import { EditLibraryResponse, EditLibraryArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Librarys } from "../../../entity/Librarys";

const resolvers: Resolvers = {
  Mutation: {
    EditLibrary: async (
      _,
      args: EditLibraryArgs,
      { req }
    ): Promise<EditLibraryResponse> => {
      const user: Users = req;
      try {
        const library: Librarys = await Librarys.findOne(
          { id: args.id },
          { relations: ["users"] }
        );
        if (library) {
          if (library.users.id === user.id) {
            library.name = args.name;
            library.save();
            return {
              result: true,
              error: undefined
            };
          } else {
            return {
              result: false,
              error: "Not Authentication"
            };
          }
        } else {
          return {
            result: false,
            error: "Library not exist"
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
