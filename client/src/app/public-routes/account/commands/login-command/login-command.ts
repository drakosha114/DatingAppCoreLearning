import {IExecutableCommand, IStoreService, StoreClass} from "../../../../global";
import {IAccountResponse, ILoginPayload} from "../../../../services/interfaces";
import {Observable, of, Subject} from "rxjs";
import {IAccountApi} from "../../interfaces/i-account-api";
import {takeUntil, tap} from "rxjs/operators";

export class LoginCommand implements IExecutableCommand<IAccountResponse>{

  private stop$: Subject<boolean> = new Subject<boolean>();

  constructor(private accountApi: IAccountApi, private storage: IStoreService) {
  }

  execute(data: ILoginPayload): Observable<IAccountResponse> {
    return this.accountApi.login(data).pipe(
      takeUntil(this.stop$),
      tap((resp) => {
        const { userName, token } = resp;
        this.storage.setItem('token', token);
        this.storage.setItem('user', JSON.stringify({userName: userName}));
      })
    );
  }

  reset(): void {
    debugger;
    this.stop$.next(true);
    this.stop$.complete();
  }
}
