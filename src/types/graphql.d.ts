import { DeepPartial } from "apollo-env";

export interface Users {
  email: string;
  password: string;
  images: Array<Images> | undefined;
  library: Array<Library> | undefined;
  createUser: string;
  updateUser: string;
}

export interface Images {
  image: string;
  usersid: number;
  createImage: string;
  updateImage: string;
}

export interface Library {
  name: string;
  usersid: number;
  createLibrary: string;
}

export interface Flowers {
  image: string;
  name: string;
  type: string;
  color: string;
  content: string;
  weather: string;
  createFlower: string;
  updateFlower: string;
}

export interface GetImageResponse {
  result: boolean;
  error: string | undefined;
  image: Array<Images> | undefined;
}

export interface GetLibraryResponse {
  result: boolean;
  error: string | undefined;
  library: Array<Library> | undefined;
}

export interface GetFlowerResponse {
  result: boolean;
  error: string | undefined;
  flower: Array<Flowers> | undefined;
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
  DeleteLibrary: DeleteLibraryResponse;

  CreateFlower: CreateFlowerResponse;

  UpHitImage: UpHitImageResponse;
  UpHitFlower: UpHitFlowerResponse;

  CreateComment: CreateCommentResponse;
  DeleteComment: DeleteCommentResponse;

  Like: LikeResponse;
}

export interface LikeResponse {
  result: boolean;
  error: string | undefined;
}

export interface DeleteLibraryResponse {
  result: boolean;
  error: string | undefined;
}

export interface DeleteCommentResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateCommentResponse {
  result: boolean;
  error: string | undefined;
}

export interface UpHitImageResponse {
  result: boolean;
  error: string | undefined;
}

export interface UpHitFlowerResponse {
  result: boolean;
  error: string | undefined;
}

export interface EmailLoginResponse {
  result: boolean;
  error: string | undefined;
  token: string | undefined;
}

export interface EmailRegistResonse {
  result: boolean;
  error: string | undefined;
  token: string | undefined;
}

export interface CreateImageResponse {
  result: boolean;
  error: string | undefined;
}

export interface DeleteImageResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateLibraryResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateFlowerResponse {
  result: boolean;
  error: string | undefined;
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
  flowerid: Array<number> | undefined;
}

export interface DeleteImageArgs {
  id: number;
}

export interface CreateLibraryArgs {
  name: string;
}

export interface CreateFlowerArgs {
  input: InputFlowers;
}

export interface InputFlowers {
  image: string;
  name: string;
  color: string;
  content: string;
  weather: string;
}

export interface UpHitImageArgs {
  id: number;
}
export interface UpHitFlowerArgs {
  id: number;
}

export interface CreateCommentArgs {
  comment: string;
  imageid: number | undefined;
  flowerid: number | undefined;
  commentid: number | undefined;
}

export interface DeleteCommentArgs {
  id: number;
}

export interface DeleteLibraryArgs {
  id: number;
}

export interface LikeArgs {
  flowerid: number | undefined;
  commentid: number | undefined;
}
