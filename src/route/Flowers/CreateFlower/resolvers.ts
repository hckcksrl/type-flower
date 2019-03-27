import {
  CreateFlowerArgs,
  CreateFlowerResonse,
  InputFlowers
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    CreateFlower: async (
      _,
      args: CreateFlowerArgs
    ): Promise<CreateFlowerResonse> => {
      const flowers: InputFlowers = args.input;
      try {
        const flower: Flowers = await Flowers.create({ ...flowers }).save();
        if (flower) {
          return {
            result: true,
            error: null
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
