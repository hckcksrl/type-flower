import { Resolvers } from "../../../types/resolvers";
import { Collection } from "../../../entity/Collection";
import { Flowers } from "../../../entity/Flowers";
import {
  EditCollectionArgs,
  EditCollectionResponse
} from "../../../types/graphql";

const resolvers: Resolvers = {
  Mutation: {
    EditCollection: async (
      _,
      args: EditCollectionArgs
    ): Promise<EditCollectionResponse> => {
      try {
        const collection: Collection = await Collection.findOne(
          {
            id: args.id
          },
          { relations: ["flowers"] }
        );
        let flowers: Flowers[] = [];
        args.flowersid.map(async id => {
          const flower = await Flowers.findOne({ id: id });
          flowers.push(flower);
          collection.flowers = flowers;
        });
        collection.save();
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
