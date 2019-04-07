import { Resolvers } from "../../../types/resolvers";
import { GetRecentResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Recent } from "../../../entity/Recent";
import { Flowers } from "../../../entity/Flowers";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Recent: {
    flowers: async ({ id }): Promise<Flowers> => {
      const recent: Recent = await Recent.findOne(
        { id: id },
        { relations: ["flowers"] }
      );
      return recent.flowers;
    }
  },
  Flowers: {
    type: async ({ id }): Promise<FlowerType> => {
      const flowers: Flowers = await Flowers.findOne(
        { id: id },
        { relations: ["flowerType"] }
      );
      return flowers.flowerType;
    }
  },
  Query: {
    GetRecent: async (_, __, { req }): Promise<GetRecentResponse> => {
      const user: Users = req;
      try {
        const recent: Array<Recent> = await Recent.find({
          where: { users: user },
          order: { createRecent: "ASC" }
        });
        if (recent) {
          return {
            result: true,
            error: undefined,
            recent: recent
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          recent: undefined
        };
      }
    }
  }
};

export default resolvers;
