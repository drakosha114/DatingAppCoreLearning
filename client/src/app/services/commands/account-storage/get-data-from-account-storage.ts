import {IExecutableCommand} from "../../../global";
import {Observable, of, throwError} from "rxjs";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {IAccountStore} from "../../interfaces";

export class GetDataFromAccountStorage implements IExecutableCommand<IAuthEntity>{

  constructor(private accountStorageProvider: IAccountStore) {
  }

  execute(): Observable<IAuthEntity> {
    const authData = this.accountStorageProvider.getAccountData();
    return authData ? of(authData) : throwError(null);
  }

  reset(): void {
  }
}
