import {IExecutableCommand, IStoreService} from "../../../../global";
import {IAccountResponse, IRegisterPayload} from "../../../../services/interfaces";
import {Observable, Subject} from "rxjs";
import {IAccountApi} from "../../interfaces/i-account-api";
import {map, takeUntil, tap} from "rxjs/operators";
import {IAuthEntity} from "../../../../services/state/auth-state/interfaces/i-auth-entity";

export class RegisterCommand implements IExecutableCommand<IAuthEntity>{

  private stop$: Subject<boolean> = new Subject<boolean>();

  constructor(private accountApi: IAccountApi) {
  }

  execute(data: IRegisterPayload): Observable<IAuthEntity> {
    return this.accountApi.register(data).pipe(
      takeUntil(this.stop$),
      // TODO AccountEntity DTO
      map(resp => ({token: resp.token, user: {name: resp.userName}}))
    );
  }

  reset(): void {
    this.stop$.next(true);
    this.stop$.complete();
  }
}
