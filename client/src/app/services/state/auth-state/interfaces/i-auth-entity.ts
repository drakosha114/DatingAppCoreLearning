import {IUserProfile} from "../../../interfaces";

export interface IAuthEntity {
  token: string;
  user: IUserProfile;
}
