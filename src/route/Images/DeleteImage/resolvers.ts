import { DeleteImageArgs, DeleteImageResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";
import { DeepPartial } from "typeorm";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    DeleteImage: async (
      _,
      args: DeleteImageArgs,
      { req }
    ): Promise<DeleteImageResponse> => {
      const users: Users = req;
      try {
        const image: Images = await Images.findOne(args.id, {
          relations: ["users"]
        });
        if (image) {
          if (image.users.id === users.id) {
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

export default resolvers;
