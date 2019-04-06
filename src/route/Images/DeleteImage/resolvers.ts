import { DeleteImageArgs, DeleteImageResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    DeleteImage: async (
      _,
      args: DeleteImageArgs,
      { req }
    ): Promise<DeleteImageResponse> => {
      try {
        const image: Images = await Images.findOne(args.id);
        if (image) {
          image.remove();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "not found"
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
