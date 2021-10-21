import {IAuthState} from "../interfaces/i-auth-state";
import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../interfaces/i-auth-entity";
import {Observable, of} from "rxjs";
import {switchMap, catchError} from "rxjs/operators";

export class NotInitializedState extends BaseAuthState implements IAuthState {

  constructor(authState: AuthState) {
    super(authState);
  }

  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): Observable<boolean> {
    return initAuthStateCommand.execute().pipe(
      switchMap( (authEntity: IAuthEntity | null) => {
        const { user, token } = authEntity || {};
        if (user && token) {
          this.setLoggedInState(token, user);
        } else {
          this.setNotLoggedInState();
        }
        return of(true);
      }),
      catchError(_ => {
        this.setNotLoggedInState();
        return of(false);
      })
    )
  }
}
