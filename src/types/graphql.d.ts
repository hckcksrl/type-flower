export interface Users {
  id: number;
  userid: number;
  nickname: string;
  librarys: Array<Librarys> | undefined;
  like: Array<Like> | undefined;
  comment: Array<Comment> | undefined;
  recent: Array<Recent> | undefined;
  createUser: string;
  updateUser: string;
}

export interface Recent {
  id: number;
  users: Users;
  flowers: Flowers;
  createRecent: string;
  updateRecent: string;
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
  incomment: Array<Comment> | undefined;
  parentComment: Comment | undefined;
  likes: Array<Like> | undefined;
  createComment: string;
  updateComment: string | undefined;
}

export interface Images {
  id: number;
  image: string;
  content: string | undefined;
  createImage: string;
  updateImage: string;
  flowers: Flowers;
}

export interface Librarys {
  id: number;
  name: string;
  users: Users;
  saveFlower: Array<SaveFlower> | undefined;
  createLibrary: string;
  updateLibrary: string;
}

export interface SaveFlower {
  id: number;
  librarys: Librarys;
  flowers: Flowers;
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
  flowerType: FlowerType;
  images: Array<Images> | undefined;
  saveFlower: Array<SaveFlower> | undefined;
  recent: Array<Recent> | undefined;
  createFlower: string;
  updateFlower: string;
}

export interface GetRecentResponse {
  result: boolean;
  error: string | undefined;
  recent: Array<Recent> | undefined;
}

export interface GetLibraryResponse {
  result: boolean;
  error: string | undefined;
  librarys: Array<Librarys> | undefined;
}

export interface GetSaveFlowerResponse {
  result: boolean;
  error: string | undefined;
  saveFlower: Array<SaveFlower> | undefined;
}

export interface GetSaveFlowerArgs {
  libraryid: number;
}

export interface GetFlowerTypeResponse {
  result: boolean;
  error: string | undefined;
  type: Array<FlowerType> | undefined;
}

export interface GetFlowersResponse {
  result: boolean;
  error: string | undefined;
  flowers: Array<Flowers> | undefined;
}

export interface GetFlowersArgs {
  typeid: number;
}

export interface GetCommentResponse {
  result: boolean;
  error: string | undefined;
  comment: Array<Comment> | undefined;
}

export interface GetCommentArgs {
  flowersid: number;
}

export interface GetUsersResponse {
  result: boolean;
  error: string | undefined;
  users: Users | undefined;
}

export interface GetFlowerResponse {
  result: boolean;
  error: string | undefined;
  flower: Flowers | undefined;
}

export interface GetFlowerArgs {
  id: number;
}

export interface GetLikeArgs {
  flowerid: number | undefined;
  commentid: number | undefined;
}

export interface GetLikeResponse {
  result: boolean;
  error: string | undefined;
  like_count: number;
}

export interface GetInCommentResponse {
  result: boolean;
  error: string | undefined;
  comment: Comment | undefined;
}

export interface GetInCommentArgs {
  id: number;
}

export interface UserFindArgs {
  userid: number;
}

export interface UserFindResponse {
  result: boolean;
  error: string | undefined;
  token: string | undefined;
}

export interface Query {
  GetRecent: GetRecentResponse;
  GetLibrary: GetLibraryResponse;
  GetSaveFlower: GetSaveFlowerResponse;
  GetFlowerType: GetFlowerTypeResponse;
  GetFlowers: GetFlowersResponse;
  GetComment: GetCommentResponse;
  GetUsers: GetUsersResponse;
  GetFlower: GetFlowerResponse;
  GetLike: GetLikeResponse;
  GetInComment: GetInCommentResponse;
  UserFind: UserFindResponse;
}

export interface Mutation {
  EmailLogin: EmailLoginResponse;
  EmailRegist: EmailRegistResonse;

  CreateImage: CreateImageResponse;
  DeleteImage: DeleteImageResponse;
  EditImage: EditImageResponse;

  CreateLibrary: CreateLibraryResponse;
  DeleteLibrary: DeleteLibraryResponse;
  EditLibrary: EditLibraryResponse;

  CreateFlower: CreateFlowerResponse;
  DeleteFlower: DeleteFlowerResponse;
  EditFlower: EditFlowerResponse;

  UpHitFlower: UpHitFlowerResponse;

  CreateComment: CreateCommentResponse;
  DeleteComment: DeleteCommentResponse;
  EditComment: EditCommentResponse;

  Like: LikeResponse;

  CreateFlowerType: CreateFlowerTypeResponse;
  DeleteFlowerType: DeleteFlowerTypeResponse;
  EditFlowerType: EditFlowerTypeResponse;

  CreateRecent: CreateRecentResponse;

  CreateSaveFlower: CreateSaveFlowerResponse;
  DeleteSaveFlower: DeleteSaveFlowerResponse;
  DeleteSave: DeleteSaveFlowerResponse;
  Logins: LoginsResponse;
  Logout: LogoutResponse;
}

export interface LogoutResponse {
  result: boolean;
}

export interface LoginsResponse {
  result: boolean;
  error: string | undefined;
  token: string | undefined;
}

export interface LoginsArgs {
  userid: number;
  nickname: string;
}

export interface DeleteSaveFlowerResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateSaveFlowerResponse {
  result: boolean;
  error: string | undefined;
}

export interface CreateRecentResponse {
  result: boolean;
  error: string | undefined;
}

export interface EditImageResponse {
  result: boolean;
  error: string | undefined;
}

export interface EditFlowerTypeResponse {
  result: boolean;
  error: string | undefined;
}

export interface EditFlowerResponse {
  result: boolean;
  error: string | undefined;
}

export interface EditCommentResponse {
  result: boolean;
  error: string | undefined;
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
  content: string | undefined;
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
  content: string;
  weather: string;
}

export interface UpHitFlowerArgs {
  id: number;
}

export interface CreateCommentArgs {
  comment: string;
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

export interface EditCommentArgs {
  id: number;
  comment: string;
}

export interface EditFlowerArgs {
  id: number;
  input: InputFlowers;
  typeid: number | undefined;
}

export interface EditFlowerTypeArgs {
  id: number;
  name: string;
}

export interface EditImageArgs {
  id: number;
  image: string;
  content: string | undefined;
  flowerid: number | undefined;
}

export interface CreateRecentArgs {
  id: number;
}

export interface CreateSaveFlowerArgs {
  flowerid: number;
  libraryid: number;
  // createLibraryid: Array<number> | undefined;
  // deleteLibraryid: Array<number> | undefined;
}

export interface DeleteSaveFlowerArgs {
  id: number;
}

export interface DeleteSaveArgs {
  flowerid: number;
  libraryid: number;
}
