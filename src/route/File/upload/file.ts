import * as Express from "express";
import { FlowerType } from "../../../entity/FlowerType";
import { Flowers } from "../../../entity/Flowers";
import { Images } from "../../../entity/Image";
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../../../config/awsconfig.json");
let s3 = new AWS.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG AND JPG"), false);
  }
};

const flowerUpload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "horang-flower",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

const router = Express.Router();

router.post(
  "/flower",
  flowerUpload.single("file"),
  async (req: Express.Request, res) => {
    const flower_type = await FlowerType.findOne({ name: req.body.type });
    const image = `https://s3.ap-northeast-2.amazonaws.com/${req.file.bucket}/${
      req.file.key
    }`;
    const input = {
      image: image,
      name: req.body.name,
      content: req.body.content
    };
    const flower: Flowers = await Flowers.create({
      ...input,
      flowerType: flower_type
    }).save();

    if (flower) {
      res.send("aa");
    } else {
      res.send("error");
    }
  }
);

const imageUpload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "horang-image",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

router.post(
  "/image",
  imageUpload.single("file"),
  async (req: Express.Request, res) => {
    const flowerid = parseInt(req.body.flowerid);
    const flowers = await Flowers.findOne({ id: flowerid });
    const image = `https://s3.ap-northeast-2.amazonaws.com/${req.file.bucket}/${
      req.file.key
    }`;
    const input = {
      image: image,
      content: req.body.content
    };
    const images: Images = await Images.create({
      ...input,
      flowers: flowers
    }).save();

    if (images) {
      res.send("aa");
    } else {
      res.send("error");
    }
  }
);

// router.get("/:id", async (req, res) => {
//   const flowers = await Flowers.findOne(
//     { id: req.params.id },
//     { relations: ["flowerType"] }
//   );
//   if (flowers) {
//     console.log(flowers);
//     // res.status(200).json({ flowers: flowers });
//   } else {
//     res.status(404).json("not found");
//   }
// });

// router.put("/:id", upload.single("file"), async (req, res) => {
//   const flowers = await Flowers.findOne({ id: req.params.id });
//   const flower_type = await FlowerType.findOne({ name: req.body.type });
//   const image = `https://s3.ap-northeast-2.amazonaws.com/${req.file.bucket}/${
//     req.file.key
//   }`;
//   if (flowers) {
//     flowers.content = req.body.content;
//     flowers.image = req.body.image;
//     (flowers.name = req.body.name), (flowers.weather = req.body.weather);
//     flowers.flowerType = flower_type;
//     flowers.save();
//     res.status(200).json({ succes: true, message: "Edit Flower" });
//   } else {
//     res.status(404).json({ success: false, message: "Not Edit Flower" });
//   }
// });

// router.get("/flower/:typeid", async (req, res) => {
//   const flowerType = await FlowerType.findOne({ id: req.params.typeid });
//   const flowers = await Flowers.find({ flowerType: flowerType });
//   if (flowers) {
//     res.send(flowers);
//   } else {
//     res.status(404).json({ sucess: false });
//   }
// });
module.exports = router;
