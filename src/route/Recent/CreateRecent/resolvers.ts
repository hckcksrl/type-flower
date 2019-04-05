import { Resolvers } from "../../../types/resolvers";
import { CreateRecentResponse, CreateRecentArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Recent } from "../../../entity/Recent";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    CreateRecent: async (
      _,
      args: CreateRecentArgs,
      { req }
    ): Promise<CreateRecentResponse> => {
      const user: Users = req;
      try {
        const flower: Flowers = await Flowers.findOne({ id: args.id });
        const recent: Recent = await Recent.findOne({
          flowers: flower,
          users: user
        });
        if (recent) {
          await Recent.update({ flowers: flower, users: user }, {});
          return {
            result: true,
            error: undefined
          };
        } else {
          await Recent.create({ users: user, flowers: flower }).save();
          return {
            result: true,
            error: undefined
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
