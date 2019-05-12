import { Resolvers } from "../../../types/resolvers";
import { EditProfileResponse, EditProfileArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    EditProfile: async (
      _,
      args: EditProfileArgs,
      { req }
    ): Promise<EditProfileResponse> => {
      const user: Users = req;
      try {
        const existUser: Users = await Users.findOne({
          nickname: args.nickname
        });
        if (existUser) {
          return {
            result: false,
            error: "exist nickname",
            nickname: ""
          };
        }
        user.nickname = args.nickname;
        user.save();
        return {
          result: true,
          error: undefined,
          nickname: user.nickname
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          nickname: ""
        };
      }
    }
  }
};

export default resolvers;
