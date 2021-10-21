import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {IExecutableCommand} from "../../../../global";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {IAuthEntity} from "../interfaces/i-auth-entity";

export class StartProcessingState extends BaseAuthState {
  constructor(state: AuthState) {
    super(state);
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.startProcessingAction(payload, loginCommand);
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.startProcessingAction(payload, registerCommand);
  }

  private startProcessingAction(payload: IRegisterPayload, command: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    this.setProcessingState();
    this.state.command = command;
    return command.execute(payload).pipe(
      tap((resp: IAuthEntity) => this.setLoggedInState(resp.token, {...resp.user})),
      catchError( (err: any) => {
        this.setErrorState(err);
        return throwError(err);
      })
    );
  }

}
