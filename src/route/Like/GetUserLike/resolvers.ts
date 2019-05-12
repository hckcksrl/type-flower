import { Resolvers } from "../../../types/resolvers";
import { GetUserLikeResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Likes } from "../../../entity/Likes";

const resolvers: Resolvers = {
  Query: {
    GetUserLike: async (_, __, { req }): Promise<GetUserLikeResponse> => {
      const user: Users = req;
      try {
        const likes: Likes[] = await Likes.find({
          where: { users: user, comment: null },
          relations: ["flowers"],
          order: { id: "DESC" }
        });
        return {
          result: true,
          error: undefined,
          likes
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          likes: undefined
        };
      }
    }
  }
};

export default resolvers;
