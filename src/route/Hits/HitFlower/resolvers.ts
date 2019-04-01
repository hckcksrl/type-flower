import { UpHitFlowerArgs, UpHitFlowerResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    UpHitFlower: async (
      _,
      args: UpHitFlowerArgs
    ): Promise<UpHitFlowerResponse> => {
      try {
        const flower: Flowers = await Flowers.findOne({ id: args.id });
        await Flowers.update({ id: args.id }, { hits: flower.hits + 1 });
        return {
          result: true,
          error: null
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
