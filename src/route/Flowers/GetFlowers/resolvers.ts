import { Resolvers } from "../../../types/resolvers";
import { GetFlowersResponse, GetFlowersArgs } from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";
import { Flowers } from "../../../entity/Flowers";
import { Images } from "../../../entity/Image";

const resolvers: Resolvers = {
  Flowers: {
    images: async ({ id }): Promise<Images[]> => {
      const flowers: Flowers = await Flowers.findOne({ id: id });
      const images: Array<Images> = await Images.find({ flowers: flowers });
      if (images.length !== 0) {
        return images;
      } else {
        return undefined;
      }
    }
  },
  Query: {
    GetFlowers: async (
      _,
      args: GetFlowersArgs
    ): Promise<GetFlowersResponse> => {
      try {
        const type: FlowerType = await FlowerType.findOne({ id: args.typeid });
        const flowers: Array<Flowers> = await Flowers.find({
          where: { flowerType: type },
          order: { id: "DESC" }
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
