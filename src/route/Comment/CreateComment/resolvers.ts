import {
  CreateCommentArgs,
  CreateCommentResponse
} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Users } from "../../../entity/Users";
import { Flowers } from "../../../entity/Flowers";
import { Comment } from "../../../entity/Comment";
import { Images } from "../../../entity/Image";

const resolvers: Resolvers = {
  Mutation: {
    CreateComment: async (
      _,
      args: CreateCommentArgs,
      { req }
    ): Promise<CreateCommentResponse> => {
      const user: Users = req;
      try {
        if (args.flowerid) {
          const flower: Flowers = await Flowers.findOne({ id: args.flowerid });
          if (flower) {
            await Comment.create({
              comment: args.comment,
              users: user,
              flowers: flower
            }).save();
            return {
              result: true,
              error: undefined
            };
          } else {
            return {
              result: false,
              error: "flower not exist"
            };
          }
        } else if (args.commentid) {
          const comment: Comment = await Comment.findOne({
            id: args.commentid
          });
          if (comment) {
            await Comment.create({
              comment: args.comment,
              users: user,
              incomment: comment
            }).save();
            return {
              result: true,
              error: undefined
            };
          } else {
            return {
              result: false,
              error: "comment not exist"
            };
          }
        } else {
          return {
            result: false,
            error: "not working"
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
