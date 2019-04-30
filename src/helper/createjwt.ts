import * as jwt from "jsonwebtoken";

const CreateJwt = (userid: number): string => {
  const token: string = jwt.sign(
    userid.toString(),
    "fkadsfjkjdhfkjsafakj" || "",
    {
      algorithm: "HS256"
    }
  );
  return token;
};

export default CreateJwt;
