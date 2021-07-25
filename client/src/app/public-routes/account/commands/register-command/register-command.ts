import {IExecutableCommand, IStoreService, StoreClass} from "../../../../global";
import {IAccountResponse, IRegisterPayload} from "../../../../services/interfaces";
import {Observable, Subject} from "rxjs";
import {IAccountApi} from "../../interfaces/i-account-api";
import {takeUntil, tap} from "rxjs/operators";

export class RegisterCommand implements IExecutableCommand<IAccountResponse>{

  private stop$: Subject<boolean> = new Subject<boolean>();

  constructor(private accountApi: IAccountApi, private storage: IStoreService) {
  }

  execute(data: IRegisterPayload): Observable<IAccountResponse> {
    return this.accountApi.register(data).pipe(
      takeUntil(this.stop$),
      tap((resp) => {
        const { userName, token } = resp;
        this.storage.setItem('token', token);
        this.storage.setItem('user', JSON.stringify({userName: userName}));
      })
    );
  }

  reset(): void {
    this.stop$.next(true);
    this.stop$.complete();
  }
}
