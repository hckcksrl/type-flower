import { Resolvers } from "../../../types/resolvers";
import { GetLibraryResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Librarys } from "../../../entity/Librarys";
import { SaveFlower } from "../../../entity/SaveFlower";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Librarys: {
    saveFlower: async ({ id }): Promise<Flowers> => {
      const library: Librarys = await Librarys.findOne({ id: id });
      const saveFlower: Array<SaveFlower> = await SaveFlower.find({
        where: { librarys: library }
      });
      return saveFlower;
    }
  },

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
