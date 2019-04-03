import { Resolvers } from "../../../types/resolvers";
import { EditCommentResponse, EditCommentArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Comment } from "../../../entity/Comment";

const resolvers: Resolvers = {
  Mutation: {
    EditComment: async (
      _,
      args: EditCommentArgs,
      { req }
    ): Promise<EditCommentResponse> => {
      const user: Users = req;
      try {
        let comment: Comment = await Comment.findOne({
          id: args.id,
          users: user
        });
        if (comment) {
          comment.comment = args.comment;
          comment.save();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "comment not exist or not authentication"
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
