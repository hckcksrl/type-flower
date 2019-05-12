import { Resolvers } from "../../../types/resolvers";
import {
  CreateCollectionResponse,
  CreateCollectionArgs
} from "../../../types/graphql";
import { Collection } from "../../../entity/Collection";

const resolvers: Resolvers = {
  Mutation: {
    CreateCollection: async (
      _,
      args: CreateCollectionArgs
    ): Promise<CreateCollectionResponse> => {
      try {
        await Collection.create({ name: args.name }).save();
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
