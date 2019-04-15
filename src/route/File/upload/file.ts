import * as Express from "express";
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../../../config/awsconfig.json");
let s3 = new AWS.S3();

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG and PNG"), false);
  }
};
const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "horang-flower",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA!" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

const router = Express.Router();

router.post("/", upload.single("file"), (req: Express.Request, res) => {
  const file = req;
  console.log(file);

  res.json("aa");
});

module.exports = router;
