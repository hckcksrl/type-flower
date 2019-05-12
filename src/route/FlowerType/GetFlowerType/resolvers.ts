import { Resolvers } from "../../../types/resolvers";
import { GetFlowerTypeResponse } from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  FlowerType: {
    flowers: async ({ id }) => {
      const type: FlowerType = await FlowerType.findOne({ where: { id: id } });
      const flowers: Flowers[] = await Flowers.find({
        where: { flowerType: type }
      });
      return flowers;
    }
  },
  Query: {
    GetFlowerType: async (_, __): Promise<GetFlowerTypeResponse> => {
      try {
        const type: Array<FlowerType> = await FlowerType.find();
        return {
          result: true,
          error: undefined,
          type: type
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          type: undefined
        };
      }
    }
  }
};

export default resolvers;
