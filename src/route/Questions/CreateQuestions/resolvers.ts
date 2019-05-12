import { Resolvers } from "../../../types/resolvers";
import {
  CreateQuestionsResponse,
  CreateQuestionsArgs
} from "../../../types/graphql";
import { Questions } from "../../../entity/Question";
import { Users } from "../../../entity/Users";

const resolvers: Resolvers = {
  Mutation: {
    CreateQuestions: async (
      _,
      args: CreateQuestionsArgs,
      { req }
    ): Promise<CreateQuestionsResponse> => {
      const user: Users = req;
      try {
        const question: Questions = await Questions.create({
          question: args.question,
          users: user
        });
        question.save();
        return {
          result: true,
          error: undefined
        };
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
