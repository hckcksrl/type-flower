import { Resolvers } from "../../../types/resolvers";
import {
  CreateFlowerTypeResponse,
  CreateFlowerTypeArgs
} from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Mutation: {
    CreateFlowerType: async (
      _,
      args: CreateFlowerTypeArgs
    ): Promise<CreateFlowerTypeResponse> => {
      try {
        const flowerType: FlowerType = await FlowerType.findOne({
          name: args.name
        });
        if (!flowerType) {
          await FlowerType.create({ name: args.name }).save();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "Type Name Exist"
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
