import { Resolvers } from "../../../types/resolvers";
import { EditImageResponse, EditImageArgs } from "../../../types/graphql";
import { Users } from "../../../entity/Users";
import { Images } from "../../../entity/Image";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    EditImage: async (
      _,
      args: EditImageArgs,
      { req }
    ): Promise<EditImageResponse> => {
      try {
        let image: Images = await Images.findOne({ id: args.id });
        if (image) {
          if (args.flowerid) {
            const flower: Flowers = await Flowers.findOne({
              id: args.flowerid
            });
            image.flowers = flower;
          }
          image.image = args.image;
          image.content = args.content;
          image.save();
          return {
            result: true,
            error: undefined
          };
        } else {
          return {
            result: false,
            error: "Image Not Exist"
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
