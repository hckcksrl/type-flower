import { Resolvers } from "../../../types/resolvers";
import { GetInCommentResponse, GetInCommentArgs } from "../../../types/graphql";
import { Comment } from "../../../entity/Comment";
import { Likes } from "../../../entity/Likes";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Query: {
    GetInComment: async (
      _,
      args: GetInCommentArgs,
      { req }
    ): Promise<GetInCommentResponse> => {
      const user: Users | undefined = req;
      try {
        const comment: Comment = await Comment.findOne({
          where: {
            id: args.id
          },
          relations: ["users"]
        });
        if (user) {
          if (user.id === comment.users.id) {
            return {
              result: true,
              error: undefined,
              comment,
              mine: true
            };
          }
        }
        return {
          result: true,
          error: undefined,
          comment,
          mine: false
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          comment: undefined,
          mine: false
        };
      }
    }
  }
};

export default resolvers;
