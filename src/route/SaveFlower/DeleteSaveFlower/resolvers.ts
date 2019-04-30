import { Resolvers } from "../../../types/resolvers";
import {
  DeleteSaveFlowerResponse,
  DeleteSaveFlowerArgs,
  DeleteSaveArgs
} from "../../../types/graphql";
import { SaveFlower } from "../../../entity/SaveFlower";
import { Flowers } from "../../../entity/Flowers";
import { Librarys } from "../../../entity/Librarys";

const resolvers: Resolvers = {
  Mutation: {
    DeleteSaveFlower: async (
      _,
      args: DeleteSaveFlowerArgs
    ): Promise<DeleteSaveFlowerResponse> => {
      try {
        const saveFlower: SaveFlower = await SaveFlower.findOne({
          id: args.id
        });
        if (saveFlower) {
          saveFlower.remove();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "Not Exist"
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message
        };
      }
    },
    DeleteSave: async (
      _,
      args: DeleteSaveArgs
    ): Promise<DeleteSaveFlowerResponse> => {
      try {
        const flower: Flowers = await Flowers.findOne({ id: args.flowerid });
        const library: Librarys = await Librarys.findOne({
          id: args.libraryid
        });
        const save: SaveFlower = await SaveFlower.findOne({
          flowers: flower,
          librarys: library
        });
        if (save) {
          save.remove();
          return {
            result: true,
            error: undefined
          };
        }
        return {
          result: false,
          error: "SaveFlower Not Found"
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
