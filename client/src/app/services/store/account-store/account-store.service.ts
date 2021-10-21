import {IAccountStore} from "../../interfaces";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {ACCESS_TOKEN_RECORD_NAME, USER_DATA_RECORD_NAME} from "../../constants";

export class AccountStoreService implements IAccountStore{

  constructor(private storage: Storage ) { }

  deleteAccountData(): void {
    this.storage.removeItem(ACCESS_TOKEN_RECORD_NAME);
    this.storage.removeItem(USER_DATA_RECORD_NAME);
  }

  getAccountData(): IAuthEntity | null {
    try {
      const token = this.storage.getItem(ACCESS_TOKEN_RECORD_NAME);
      const user = JSON.parse(<string>this.storage.getItem(USER_DATA_RECORD_NAME));

      if(user && token) {
        return {
          user,
          token
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  setAccountData(data: IAuthEntity): void {
    const { token, user } = data;
    this.storage.setItem(ACCESS_TOKEN_RECORD_NAME, token);
    this.storage.setItem(USER_DATA_RECORD_NAME, JSON.stringify(user));
  }
}
