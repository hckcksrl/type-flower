import { DeepPartial } from "apollo-env";
import { Flower_Image } from "../entity/Flower_Image";

export interface Users {
  id: number;
  email: string;
  password: string;
  images: Array<Images> | null;
  library: Array<Library> | null;
}

export interface Images {
  id: number;
  image: string;
  usersid: number;
}

export interface Library {
  id: number;
  name: string;
  usersid: number;
}

export interface Flowers {
  id: number;
  image: string;
  name: string;
  type: string;
  color: string;
  content: string;
  weather: string;
}

export interface GetImageResponse {
  result: boolean;
  error: string | null;
  image: Array<Images> | null;
}

export interface GetLibraryResponse {
  result: boolean;
  error: string | null;
  library: Array<Library> | null;
}

export interface GetFlowerResponse {
  result: boolean;
  error: string | null;
  flower: Array<Flowers> | null;
}

export interface Query {
  GetImage: GetImageResponse;
  GetLibrary: GetLibraryResponse;
  GetFlower: GetFlowerResponse;
}

export interface Mutation {
  EmailLogin: EmailLoginResponse;
  EmailRegist: EmailRegistResonse;
  CreateImage: CreateImageResponse;
  DeleteImage: DeleteImageResponse;
  CreateLibrary: CreateLibraryResponse;
  CreateFlower: CreateFlowerResonse;
}

export interface EmailLoginResponse {
  result: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailRegistResonse {
  result: boolean;
  error: string | null;
  token: string | null;
}

export interface CreateImageResponse {
  result: boolean;
  error: string | null;
}

export interface DeleteImageResponse {
  result: boolean;
  error: string | null;
}

export interface CreateLibraryResponse {
  result: boolean;
  error: string | null;
}

export interface CreateFlowerResonse {
  result: boolean;
  error: string | null;
}

export interface EmailLoginArgs {
  email: string;
  password: string;
}

export interface EmailRegistArgs {
  email: string;
  password: string;
}

export interface CreateImageArgs {
  image: string;
  flowerid: Array<DeepPartial<Flower_Image>> | null;
}

export interface DeleteImageArgs {
  id: number;
}

export interface CreateLibraryArgs {
  name: string;
}

export interface CreateFlowerArgs {
  input: {
    image: string;
    name: string;
    type: string;
    color: string;
    content: string;
    weather: string;
  };
}
