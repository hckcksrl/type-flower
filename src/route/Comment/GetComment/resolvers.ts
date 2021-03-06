import { Resolvers } from "../../../types/resolvers";
import { GetCommentResponse, GetCommentArgs } from "../../../types/graphql";
import { Flowers } from "../../../entity/Flowers";
import { Comment } from "../../../entity/Comment";
import { Users } from "../../../entity/Users";
import { Likes } from "../../../entity/Likes";

const resolvers: Resolvers = {
  Comment: {
    users: async ({ id }): Promise<Users> => {
      const comment: Comment = await Comment.findOne(
        { id: id },
        { relations: ["users"] }
      );
      return comment.users;
    },
    incomment: async ({ id }): Promise<Comment[]> => {
      const comment: Comment = await Comment.findOne({ id });
      const incomment: Array<Comment> = await Comment.find({
        where: { parentComment: comment },
        relations: ["users"],
        order: { id: "DESC" }
      });
      if (incomment.length !== 0) {
        return incomment;
      } else {
        return null;
      }
    }
  },
  Like: {
    users: async ({ id }): Promise<Users> => {
      const likes: Likes = await Likes.findOne(
        { id: id },
        { relations: ["users"] }
      );
      return likes.users;
    }
  },
  Query: {
    GetComment: async (
      _,
      args: GetCommentArgs,
      { req }
    ): Promise<GetCommentResponse> => {
      try {
        const flowers: Flowers = await Flowers.findOne({ id: args.flowersid });
        const comment: Array<Comment> = await Comment.find({
          where: {
            flowers: flowers
          },
          order: { id: "DESC" },
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
