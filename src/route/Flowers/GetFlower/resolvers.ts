import { Resolvers } from "../../../types/resolvers";
import { GetFlowerResponse, GetFlowerArgs } from "../../../types/graphql";
import { Flowers } from "../../../entity/Flowers";
const resolvers: Resolvers = {
  Query: {
    GetFlower: async (_, args: GetFlowerArgs): Promise<GetFlowerResponse> => {
      try {
        const flower: Flowers = await Flowers.findOne({
          id: args.id
        });
        if (flower) {
          return {
            result: true,
            error: undefined,
            flower
          };
        } else {
          return {
            result: false,
            error: "Flower Not Find",
            flower: undefined
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          flower: undefined
        };
      }
    }
  }
};

export default resolvers;
