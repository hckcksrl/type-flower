import { Resolvers } from "../../../types/resolvers";
import {
  CreateSaveFlowerResponse,
  CreateSaveFlowerArgs
} from "../../../types/graphql";
import { Flowers } from "../../../entity/Flowers";
import { Librarys } from "../../../entity/Librarys";
import { SaveFlower } from "../../../entity/SaveFlower";

const resolvers: Resolvers = {
  Mutation: {
    CreateSaveFlower: async (
      _,
      args: CreateSaveFlowerArgs
    ): Promise<CreateSaveFlowerResponse> => {
      try {
        const flower: Flowers = await Flowers.findOne({ id: args.flowerid });
        const library: Librarys = await Librarys.findOne({
          id: args.libraryid
        });
        if (library) {
          const saveFlower: SaveFlower = await SaveFlower.findOne({
            flowers: flower,
            library: library
          });
          if (saveFlower) {
            return {
              result: true,
              error: "Exist Flower"
            };
          } else {
            await SaveFlower.create({
              flowers: flower,
              library: library
            }).save();
            return {
              result: true,
              error: undefined
            };
          }
        } else {
          return {
            result: false,
            error: "Library Not Exist"
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
