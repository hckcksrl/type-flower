import { Resolvers } from "../../../types/resolvers";
import { LikeArgs, LikeResponse } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Comment } from "../../../entity/Comment";
import { Likes } from "../../../entity/Likes";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    Like: async (_, args: LikeArgs, { req }): Promise<LikeResponse> => {
      const user: Users = req;
      try {
        if (args.commentid) {
          const comment: Comment = await Comment.findOne({
            id: args.commentid
          });
          if (comment) {
            const like: Likes = await Likes.findOne({
              comment: comment,
              users: user
            });
            if (like) {
              like.remove();
              return {
                result: true,
                error: undefined
              };
            } else {
              await Likes.create({ comment: comment, users: user }).save();
              return {
                result: true,
                error: undefined
              };
            }
          } else {
            return {
              result: false,
              error: "comment not exist"
            };
          }
        } else if (args.flowerid) {
          const flower: Flowers = await Flowers.findOne({ id: args.flowerid });
          if (flower) {
            const like: Likes = await Likes.findOne({
              flowers: flower,
              users: user
            });
            if (like) {
              like.remove();
              return {
                result: true,
                error: undefined
              };
            } else {
              await Likes.create({ flowers: flower, users: user }).save();
              return {
                result: true,
                error: undefined
              };
            }
          } else {
            return {
              result: false,
              error: "flower not exist"
            };
          }
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
