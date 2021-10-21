import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";

export interface IAccountStore {
  setAccountData(data: IAuthEntity): void;
  getAccountData(): IAuthEntity | null;
  deleteAccountData(): void;
}
