import {AuthState} from "../auth-state";
import {IAuthState} from "../interfaces/i-auth-state";
import {ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {IAuthEntity} from "../interfaces/i-auth-entity";
import {IEntityBase, IExecutableCommand} from "../../../../global";
import {Observable, of, throwError} from "rxjs";

export class BaseAuthState implements IAuthState{
  constructor(protected state: AuthState) {
  }

  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): Observable<boolean>{
    return of(true);
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return throwError('Login or password incorrect');
  }

  logout(logoutCommand:IExecutableCommand<boolean>): Observable<boolean> {
    return throwError('You not logged in');
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return throwError('Login or password incorrect');
  }

  reset(): void {
  }

  protected setProcessingState() {
    const newState = {isLoading: true, isLoaded: false, error: null, data: null};
    this.updateStateData(newState);
    this.setState(this.state.processingState);
  }

  protected setNotLoggedInState() {
    const newState = {isLoading: false, isLoaded: false, error: null, data: null};
    this.updateStateData(newState);
    this.setState(this.state.notLoggedInState);
  }

  protected setErrorState(error: any) {
    const newState = {isLoading: false, isLoaded: true, error: error, data: null};
    this.updateStateData(newState);
    this.setState(this.state.processingErrorState);

  }

  protected setLoggedInState(token: string, user: any) {
    const newState = {isLoading: false, isLoaded: true, error: null, data: {token, user}};
    this.updateStateData(newState);
    this.setState(this.state.loggedInState);
  }

  private updateStateData(data: IEntityBase<IAuthEntity>) {
    this.state.authState = data;
  }

  private setState(state: IAuthState | null): void {
    this.state.state = state;
  }
}
