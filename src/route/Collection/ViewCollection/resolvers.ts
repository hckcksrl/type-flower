import { Resolvers } from "../../../types/resolvers";
import {
  ViewCollectionResponse,
  ViewCollectionArgs
} from "../../../types/graphql";
import { Collection } from "../../../entity/Collection";

const resolvers: Resolvers = {
  Mutation: {
    ViewCollection: async (
      _,
      args: ViewCollectionArgs
    ): Promise<ViewCollectionResponse> => {
      try {
        const collections: Collection[] = await Collection.find();
        await collections.map(collection => {
          collection.view = false;
          collection.save();
          args.id.map(id => {
            if (collection.id === id) {
              collection.view = true;
              collection.save();
            }
          });
        });
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
