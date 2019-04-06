import { Resolvers } from "../../../types/resolvers";
import { GetFlowersResponse, GetFlowersArgs } from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Query: {
    GetFlowers: async (
      _,
      args: GetFlowersArgs
    ): Promise<GetFlowersResponse> => {
      try {
        const type: FlowerType = await FlowerType.findOne({ id: args.typeid });
        const flowers: Array<Flowers> = await Flowers.find({
          flowerType: type
        });
        return {
          result: true,
          error: undefined,
          flowers
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          flowers: undefined
        };
      }
    }
  }
};

export default resolvers;
