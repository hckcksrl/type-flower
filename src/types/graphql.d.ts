export interface Users {
  id: number;
  email: string;
  password: string;
  images: Array<Images> | undefined;
  library: Array<Library> | undefined;
  like: Array<Like> | undefined;
  comment: Array<Comment> | undefined;
  createUser: string;
  updateUser: string;
}

export interface Like {
  id: number;
  users: Users;
  flowers: Flowers | undefined;
  comment: Comment | undefined;
}

export interface Comment {
  id: number;
  comment: string;
  users: Users;
  flowers: Flowers | undefined;
  incomment: number | undefined;
}

export interface Images {
  id: number;
  image: string;
  usersid: number;
  createImage: string;
  updateImage: string;
  flowers: Flowers;
}

export interface Library {
  id: number;
  name: string;
  users: Users;
  saveFlower: SaveFlower | undefined;
  createLibrary: string;
  updateLibrary: string;
}

export interface SaveFlower {
  id: number;
  library: Array<Library> | undefined;
  flowers: Array<Flowers> | undefined;
}

export interface FlowerType {
  id: number;
  name: string;
  flowers: Array<Flowers> | undefined;
}

export interface Flowers {
  id: number;
  image: string;
  name: string;
  content: string;
  weather: string;
  hits: number;
  type: FlowerType;
  images: Array<Images> | undefined;
  saveFlower: SaveFlower | undefined;
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
  EditLibrary: EditLibraryResponse;

  CreateFlower: CreateFlowerResponse;
  DeleteFlower: DeleteFlowerResponse;

  UpHitFlower: UpHitFlowerResponse;

  CreateComment: CreateCommentResponse;
  DeleteComment: DeleteCommentResponse;

  Like: LikeResponse;

  CreateFlowerType: CreateFlowerTypeResponse;
  DeleteFlowerType: DeleteFlowerTypeResponse;
}

export interface DeleteFlowerTypeResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateFlowerTypeResponse {
  result: boolean;
  error: string | undefined;
}

export interface DeleteFlowerResponse {
  result: boolean;
  error: string | undefined;
}

export interface EditLibraryResponse {
  result: boolean;
  error: string | undefined;
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
  flowerid: number | undefined;
}

export interface DeleteImageArgs {
  id: number;
}

export interface CreateLibraryArgs {
  name: string;
}

export interface CreateFlowerArgs {
  input: InputFlowers;
  typeid: number;
}

export interface InputFlowers {
  image: string;
  name: string;
  color: string;
  content: string;
  weather: string;
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

export interface EditLibraryArgs {
  id: number;
  name: string;
}

export interface DeleteFlowerArgs {
  id: number;
}

export interface CreateFlowerTypeArgs {
  name: string;
}

export interface DeleteFlowerTypeArgs {
  id: number;
}
