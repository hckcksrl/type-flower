import { Resolvers } from "../../../types/resolvers";
import { GetFlowerTypeResponse } from "../../../types/graphql";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Query: {
    GetFlowerType: async (_, __, { req }): Promise<GetFlowerTypeResponse> => {
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
