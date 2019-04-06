import { Resolvers } from "../../../types/resolvers";
import {
  GetSaveFlowerResponse,
  GetSaveFlowerArgs
} from "../../../types/graphql";
import { SaveFlower } from "../../../entity/SaveFlower";
import { Librarys } from "../../../entity/Librarys";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  SaveFlower: {
    flowers: async ({ id }) => {
      const saveFlower: SaveFlower = await SaveFlower.findOne(
        { id },
        { relations: ["flowers"] }
      );
      return saveFlower.flowers;
    }
  },
  Flowers: {
    type: async ({ id }) => {
      const flowers: Flowers = await Flowers.findOne(
        { id: id },
        { relations: ["flowerType"] }
      );
      return flowers.flowerType;
    }
  },
  Query: {
    GetSaveFlower: async (
      _,
      args: GetSaveFlowerArgs,
      { req }
    ): Promise<GetSaveFlowerResponse> => {
      try {
        const library: Librarys = await Librarys.findOne({
          id: args.libraryid
        });
        if (library) {
          const saveFlower: Array<SaveFlower> = await SaveFlower.find({
            where: {
              librarys: library
            }
          });
          return {
            result: true,
            error: undefined,
            saveFlower: saveFlower
          };
        } else {
          return {
            result: false,
            error: "Library Not Found",
            saveFlower: undefined
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          saveFlower: undefined
        };
      }
    }
  }
};

export default resolvers;
