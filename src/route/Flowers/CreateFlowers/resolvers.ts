import {
  CreateFlowerArgs,
  CreateFlowerResponse,
  InputFlowers
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Flowers } from "../../../entity/Flowers";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Mutation: {
    CreateFlower: async (
      _,
      args: CreateFlowerArgs
    ): Promise<CreateFlowerResponse> => {
      const flowers: InputFlowers = args.input;
      try {
        const flowerType: FlowerType = await FlowerType.findOne({
          id: args.typeid
        });
        const flower: Flowers = await Flowers.create({
          ...flowers,
          flowerType: flowerType
        }).save();
        if (flower) {
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "error"
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
