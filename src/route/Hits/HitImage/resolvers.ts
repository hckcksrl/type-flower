import { UpHitImageArgs, UpHitImageResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";

const resolvers: Resolvers = {
  Mutation: {
    UpHitImage: async (
      _,
      args: UpHitImageArgs
    ): Promise<UpHitImageResponse> => {
      try {
        const image: Images = await Images.findOne({ id: args.id });
        await Images.update({ id: args.id }, { hits: image.hits + 1 });
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
