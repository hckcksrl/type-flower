import { CreateImageArgs, CreateFlowerResonse } from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import { Images } from "../../../entity/Image";
import { Flower_Image } from "../../../entity/Flower_Image";
import { DeepPartial } from "typeorm";

const resolvers: Resolvers = {
  Mutation: {
    CreateImage: async (
      _,
      args: CreateImageArgs,
      { req }
    ): Promise<CreateFlowerResonse> => {
      console.log(req);
      try {
        // await Images.create({ image: args.image, users: req.id })
        //   .save()
        //   .then((result: any) => {
        // args.flowerid.map(flowerid => {
        //   Flower_Image.create({
        //     images: result.id,
        //     flowers: flowerid
        //   }).save();
        // });
        //     return {
        //       result: true,
        //       error: null
        //     };
        //   })
        //   .catch(error => {
        //     return {
        //       result: false,
        //       error: error.message
        //     };
        //   });
        const result: DeepPartial<Images> = await Images.create({
          image: args.image,
          users: req.id
        }).save();
        if (result) {
          args.flowerid.map((flowerid: DeepPartial<Flower_Image>) => {
            Flower_Image.create({
              images: result,
              flowers: flowerid
            }).save();
          });
          return {
            result: true,
            error: null
          };
        } else {
          return {
            result: false,
            error: "don't create"
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
