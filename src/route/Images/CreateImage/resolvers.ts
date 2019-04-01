import { CreateImageArgs, CreateImageResponse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";
import { DeepPartial, In } from "typeorm";
import { Users } from "../../../entity/Users";
import { Flowers } from "../../../entity/Flowers";

const resolvers: Resolvers = {
  Mutation: {
    CreateImage: async (
      _,
      args: CreateImageArgs,
      { req }
    ): Promise<CreateImageResponse> => {
      const user: DeepPartial<Users> = req;
      try {
        const flowers: Array<DeepPartial<Flowers>> = await Flowers.find({
          where: { id: In(args.flowerid) }
        });
        if (flowers) {
          const image: Images = await Images.create({
            image: args.image,
            hits: 0,
            flowers: flowers,
            users: user
          }).save();
          if (image) {
            return {
              result: true,
              error: null
            };
          } else {
            return {
              result: false,
              error: "Image Not Create"
            };
          }
        } else {
          return {
            result: false,
            error: "Flowers Not Exist"
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

// await getRepository(Images)
//   .createQueryBuilder()
//   .insert()
//   .into("images")
//   .values({ image: args.image, users: req.id })
//   .execute()
//   .then(result => {
//     args.flowerid.map(flowerid => {
//       getRepository(Flower_Image)
//         .createQueryBuilder()
//         .insert()
//         .into("flower_image")
//         .values({ flowers: flowerid, images: result.identifiers[0].id })
//         .execute();
//     });
//   });

// const images: Images = await Images.create({
//   image: args.image,
//   users: user
// }).save();
// if (images) {
//   let length: number = args.flowerid.length;
//   while (length - 1 >= 0) {
//     const flower: Flowers = await Flowers.findOne({
//       id: args.flowerid[length - 1]
//     });
//     await Flower_Image.create({
//       images: images,
//       flowers: flower
//     }).save();
//     length = length - 1;
//   }
//   return {
//     result: true,
//     error: null
//   };
// }
