import {
  DeleteCommentResponse,
  DeleteCommentArgs
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Users } from "../../../entity/Users";
import { Comment } from "../../../entity/Comment";

const resolvers: Resolvers = {
  Mutation: {
    DeleteComment: async (
      _,
      args: DeleteCommentArgs,
      { req }
    ): Promise<DeleteCommentResponse> => {
      const user: Users = req;
      try {
        const comment = await Comment.findOne(
          { id: args.id },
          { relations: ["users"] }
        );
        if (comment) {
          if (comment.users.id === user.id) {
            comment.remove();
            return {
              result: true,
              error: undefined
            };
          } else {
            return {
              result: false,
              error: "don't authentication"
            };
          }
        } else {
          return {
            result: false,
            error: "not comment exist"
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
