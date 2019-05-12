import { Resolvers } from "../../../types/resolvers";
import { GetQuestionsResponse } from "../../../types/graphql";
import { Questions } from "../../../entity/Question";

const resolvers: Resolvers = {
  Query: {
    GetQuestions: async (_): Promise<GetQuestionsResponse> => {
      try {
        const questions: Questions[] = await Questions.find();
        return {
          result: true,
          error: undefined,
          questions: questions
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          questions: undefined
        };
      }
    }
  }
};

export default resolvers;
