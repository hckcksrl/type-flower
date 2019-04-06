import { Resolvers } from "../../../types/resolvers";
import { GetLibraryResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Librarys } from "../../../entity/Librarys";

const resolvers: Resolvers = {
  Query: {
    GetLibrary: async (_, __, { req }): Promise<GetLibraryResponse> => {
      const user: Users = req;
      try {
        const librarys: Array<Librarys> = await Librarys.find({
          where: { users: user }
        });
        if (librarys) {
          return {
            result: true,
            error: undefined,
            librarys: librarys
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          librarys: undefined
        };
      }
    }
  }
};

export default resolvers;
