import { Resolvers } from "../../../types/resolvers";
import { GetLikeResponse, GetLikeArgs } from "../../../types/graphql";
import { Comment } from "../../../entity/Comment";
import { Likes } from "../../../entity/Likes";
import { Users } from "../../../entity/Users";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Query: {
    GetLike: async (
      _,
      args: GetLikeArgs,
      { req }
    ): Promise<GetLikeResponse> => {
      const user: Users = req;
      try {
        if (args.commentid) {
          const comment: Comment = await Comment.findOne({
            where: {
              id: args.commentid
            }
          });
          if (!comment) {
            return {
              result: false,
              error: "error",
              like_count: 0
            };
          }
          const likes: Likes[] = await Likes.find({
            where: {
              comment: comment
            }
          });
          const islike: Likes = await Likes.findOne({
            users: user,
            comment: comment
          });
          if (!islike) {
            return {
              result: false,
              error: "undefined like",
              like_count: likes.length
            };
          }
          return {
            result: true,
            error: undefined,
            like_count: likes.length
          };
        }
        if (args.flowerid) {
          const flower: Flowers = await Flowers.findOne({
            where: {
              id: args.flowerid
            }
          });
          if (!flower) {
            return {
              result: false,
              error: "error",
              like_count: 0
            };
          }
          const likes: Likes[] = await Likes.find({
            where: {
              flowers: flower
            }
          });
          const islike: Likes = await Likes.findOne({
            users: user,
            flowers: flower
          });
          if (!islike) {
            return {
              result: false,
              error: "undefined like",
              like_count: likes.length
            };
          }
          return {
            result: true,
            error: undefined,
            like_count: likes.length
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          like_count: 0
        };
      }
    }
  }
};

export default resolvers;
