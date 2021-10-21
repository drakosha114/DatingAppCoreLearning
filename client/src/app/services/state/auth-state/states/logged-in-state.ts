import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {IExecutableCommand} from "../../../../global";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class LoggedInState extends BaseAuthState {

  constructor(authState: AuthState) {
    super(authState);
  }

  logout(logoutCommand: IExecutableCommand<boolean>): Observable<boolean> {
    return logoutCommand.execute().pipe(
      tap(() => this.setNotLoggedInState())
    );
  }

}
