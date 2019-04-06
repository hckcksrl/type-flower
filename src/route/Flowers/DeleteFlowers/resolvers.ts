import { Resolvers } from "../../../types/resolvers";
import { DeleteFlowerResponse, DeleteFlowerArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    DeleteFlower: async (
      _,
      args: DeleteFlowerArgs,
      { req }
    ): Promise<DeleteFlowerResponse> => {
      const user: Users = req;
      try {
        const flower: Flowers = await Flowers.findOne({ id: args.id });
        if (flower) {
          flower.remove();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "Flower not exist"
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
