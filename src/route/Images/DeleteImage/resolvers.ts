import { DeleteImageArgs, DeleteImageResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";
import { DeepPartial } from "typeorm";

const resolvers: Resolvers = {
  Mutation: {
    DeleteImage: async (
      _,
      args: DeleteImageArgs,
      { req }
    ): Promise<DeleteImageResponse> => {
      try {
        const image = await Images.findOne({ id: args.id });
        if (image) {
          if (image.users === req.id) {
            image.remove();
            return {
              result: true,
              error: null
            };
          } else {
            return {
              result: false,
              error: "Not Create User"
            };
          }
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
