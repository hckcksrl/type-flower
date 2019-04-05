import { Resolvers } from "../../../types/resolvers";
import {
  DeleteSaveFlowerResponse,
  DeleteSaveFlowerArgs
} from "../../../types/graphql";
import { SaveFlower } from "../../../entity/SaveFlower";

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
    }
  }
};

export default resolvers;
