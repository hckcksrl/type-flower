import { Resolvers } from "../../../types/resolvers";
import { LoginsResponse, LoginsArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import CreateJwt from "../../../helper/createjwt";

const resolvers: Resolvers = {
  Mutation: {
    Logins: async (_, args: LoginsArgs): Promise<LoginsResponse> => {
      try {
        const user: Users = await Users.findOne({
          userid: args.userid
        });
        if (user) {
          const token = CreateJwt(user.userid);
          return {
            result: true,
            error: undefined,
            token,
            nickname: user.nickname
          };
        } else {
          const CreateUser: Users = await Users.create({
            nickname: args.nickname,
            userid: args.userid
          }).save();
          const token = CreateJwt(CreateUser.userid);
          return {
            result: true,
            error: undefined,
            token,
            nickname: CreateUser.nickname
          };
        }
      } catch (error) {
        return {
          result: false,
          error: error.message,
          token: undefined,
          nickname: ""
        };
      }
    }
  }
};

export default resolvers;
