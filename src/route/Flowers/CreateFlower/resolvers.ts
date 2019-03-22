import { CreateFlowerArgs, CreateFlowerResonse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    CreateFlower: async (
      _,
      args: CreateFlowerArgs
    ): Promise<CreateFlowerResonse> => {
      console.log(args.input);
      try {
        const flower = await Flowers.create({ ...args.input }).save();
        console.log(flower);
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
