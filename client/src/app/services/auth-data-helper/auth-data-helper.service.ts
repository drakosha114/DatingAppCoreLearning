import {IAccountStore} from "../interfaces";
import {
  ACCESS_TOKEN_RECORD_NAME,
  USER_DATA_RECORD_NAME
} from "../constants";
import { IStoreService } from 'src/app/global';
import {IAuthEntity} from "../state/auth-state/interfaces/i-auth-entity";

export class AuthDataHelperService implements IAccountStore {

  constructor(private storage: IStoreService) { }

  public setAccountData(authData: IAuthEntity): void {
    const { token, user } = authData;
    this.storage.setItem(ACCESS_TOKEN_RECORD_NAME, token);
    this.storage.setItem(USER_DATA_RECORD_NAME, JSON.stringify({user}));
  }

  public getAccountData(): IAuthEntity | null {
    try {
      const token = this.storage.getItem(ACCESS_TOKEN_RECORD_NAME);
      const user = JSON.parse(<string>this.storage.getItem(USER_DATA_RECORD_NAME));

      return token && user ? { token, user: { name: user?.userName}} : null;
    } catch (e) {
      return null;
    }
  }

  public deleteAccountData(): void {
    this.storage.removeItem(ACCESS_TOKEN_RECORD_NAME);
    this.storage.removeItem(USER_DATA_RECORD_NAME);
  }

}
