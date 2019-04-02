import { Resolvers } from "../../../types/resolvers";
import {
  DeleteFlowerTypeResponse,
  DeleteFlowerTypeArgs
} from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Mutation: {
    DeleteFlowerType: async (
      _,
      args: DeleteFlowerTypeArgs
    ): Promise<DeleteFlowerTypeResponse> => {
      try {
        const flowerType: FlowerType = await FlowerType.findOne({
          id: args.id
        });
        if (flowerType) {
          flowerType.remove();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "FlowerType Not Exist"
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
