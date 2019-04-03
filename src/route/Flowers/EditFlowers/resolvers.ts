import { Resolvers } from "../../../types/resolvers";
import { EditFlowerResponse, EditFlowerArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Flowers } from "../../../entity/Flowers";
import { FlowerType } from "../../../entity/FlowerType";

const resolvers: Resolvers = {
  Mutation: {
    EditFlower: async (
      _,
      args: EditFlowerArgs,
      { req }
    ): Promise<EditFlowerResponse> => {
      const user: Users = req;
      try {
        let flower: Flowers = await Flowers.findOne({ id: args.id });
        if (flower) {
          if (args.typeid) {
            const type: FlowerType = await FlowerType.findOne({
              id: args.typeid
            });
            flower.flowerType = type;
          }
          flower.content = args.input.content;
          flower.name = args.input.name;
          flower.image = args.input.image;
          flower.weather = args.input.weather;
          flower.save();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "Flower Not Exist"
          };
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
