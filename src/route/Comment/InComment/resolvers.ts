import { Resolvers } from "../../../types/resolvers";
import { GetInCommentResponse, GetInCommentArgs } from "../../../types/graphql";
import { Comment } from "../../../entity/Comment";
import { Likes } from "../../../entity/Likes";

const resolvers: Resolvers = {
  Query: {
    GetInComment: async (
      _,
      args: GetInCommentArgs
    ): Promise<GetInCommentResponse> => {
      try {
        const comment: Comment = await Comment.findOne({
          where: {
            id: args.id
          },
          relations: ["users"]
        });
        return {
          result: true,
          error: undefined,
          comment
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          comment: undefined
        };
      }
    }
  }
};

export default resolvers;
