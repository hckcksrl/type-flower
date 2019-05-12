import { Resolvers } from "../../../types/resolvers";
import { GetCollectionResponse } from "../../../types/graphql";
import { Collection } from "../../../entity/Collection";

const resolvers: Resolvers = {
  Query: {
    GetCollection: async (_): Promise<GetCollectionResponse> => {
      try {
        const collections: Collection[] = await Collection.find({
          relations: ["flowers"]
        });
        return {
          result: true,
          error: undefined,
          collection: collections
        };
      } catch (error) {
        return {
          result: false,
          error: error.message,
          collection: undefined
        };
      }
    }
  }
};

export default resolvers;
