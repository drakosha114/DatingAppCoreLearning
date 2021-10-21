import {IAccountStore} from "../../interfaces";
import {IExecutableCommand} from "../../../global";
import {Observable, of} from "rxjs";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";

export class ClearAccountStorage implements IExecutableCommand<boolean>{

  private accountData: IAuthEntity | null = null;
  constructor(private accountStorageProvider: IAccountStore) {
  }

  execute(): Observable<boolean> {
    this.accountData = this.accountStorageProvider.getAccountData();
    this.accountStorageProvider.deleteAccountData();
    return of(true);
  }

  reset(): void {
    if(this.accountData) {
      this.accountStorageProvider.setAccountData(this.accountData);
    }
  }
}
