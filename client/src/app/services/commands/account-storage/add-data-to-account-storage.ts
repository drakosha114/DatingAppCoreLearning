import {IAccountStore} from "../../interfaces";
import {IExecutableCommand} from "../../../global";
import {Observable, of} from "rxjs";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";

export class AddDataToAccountStorage implements IExecutableCommand<IAuthEntity>{
  constructor(private accountStorageProvider: IAccountStore) {
  }

  execute(accountData: IAuthEntity): Observable<IAuthEntity> {
    this.accountStorageProvider.setAccountData(accountData);
    return of(accountData);
  }

  reset(): void {
    this.accountStorageProvider.deleteAccountData();
  }
}
