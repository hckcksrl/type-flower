import { Resolvers } from "../../../types/resolvers";
import {
  EditFlowerTypeResponse,
  EditFlowerTypeArgs
} from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Mutation: {
    EditFlowerType: async (
      _,
      args: EditFlowerTypeArgs
    ): Promise<EditFlowerTypeResponse> => {
      try {
        let type: FlowerType = await FlowerType.findOne({ id: args.id });
        if (type) {
          type.name = args.name;
          type.save();
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
