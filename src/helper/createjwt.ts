import * as jwt from "jsonwebtoken";

const CreateJwt = (email: string): string => {
  const token = jwt.sign(email, "1234" || "", { algorithm: "HS256" });
  return token;
};

export default CreateJwt;
