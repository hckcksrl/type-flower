import { Resolvers } from "../../../types/resolvers";
import { GetCommentResponse, GetCommentArgs } from "../../../types/graphql";
import { Flowers } from "../../../entity/Flowers";
import { Comment } from "../../../entity/Comment";

const resolvers: Resolvers = {
  Comment: {
    users: async ({ id }) => {
      const comment: Comment = await Comment.findOne(
        { id: id },
        { relations: ["users"] }
      );
      return comment.users;
    },
    incomment: async ({ id }) => {
      const comment: Comment = await Comment.findOne({ id });
      const incomment: Array<Comment> = await Comment.find({
        where: { incomment: comment }
      });
      console.log(incomment);
    }
  },

  Query: {
    GetComment: async (
      _,
      args: GetCommentArgs
    ): Promise<GetCommentResponse> => {
      try {
        const flowers: Flowers = await Flowers.findOne({ id: args.flowersid });
        const comment: Array<Comment> = await Comment.find({
          where: {
            flowers: flowers
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
