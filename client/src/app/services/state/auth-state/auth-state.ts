import {IAuthState} from "./interfaces/i-auth-state";
import {IAuthEntity} from "./interfaces/i-auth-entity";
import {IAuthService, IEntityBase, IExecutableCommand, IStoreBase} from "../../../global";
import {ILoginPayload, IRegisterPayload} from "../../interfaces";
import {BehaviorSubject, Observable, of, throwError} from "rxjs";
import {NotInitializedState} from "./states/not-initialized-state";
import {NotLoggedInState} from "./states/not-logged-in-state";
import {ProcessingState} from "./states/processing-state";
import {ProcessingErrorState} from "./states/processing-error-state";
import {LoggedInState} from "./states/logged-in-state";
import {map} from "rxjs/operators";

export class AuthState implements IAuthState, IStoreBase<IAuthEntity>, IAuthService{

  private _authState = new BehaviorSubject<IEntityBase<IAuthEntity>>({isLoading: false, isLoaded: false, error: null, data: null});
  get getState(): Observable<IEntityBase<IAuthEntity>> {
    return this._authState;
  };
  set authState(newState: IEntityBase<IAuthEntity> ) {
    this._authState.next(newState);
  }

  public command: IExecutableCommand<any> | null= null;

  readonly notInitializedState: IAuthState | null = null;
  readonly notLoggedInState: IAuthState | null = null;
  readonly processingState: IAuthState | null = null;
  readonly processingErrorState: IAuthState | null = null;
  readonly loggedInState: IAuthState | null = null;

  public state: IAuthState | null = null;

  constructor() {
    this.notInitializedState = new NotInitializedState(this);
    this.notLoggedInState = new NotLoggedInState(this);
    this.processingState = new ProcessingState(this);
    this.processingErrorState = new ProcessingErrorState(this);
    this.loggedInState = new LoggedInState(this);

    this.state = this.notInitializedState;
  }

  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): Observable<boolean> {
    return this.state?.init(initAuthStateCommand) || of(false);
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.state?.login(payload, loginCommand) || throwError('Login or password incorrect');
  }

  logout(logoutCommand:IExecutableCommand<boolean>): Observable<boolean> {
    return this.state?.logout(logoutCommand) || throwError('You not logged in');
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.state?.register(payload, registerCommand) || throwError('Login or password incorrect');
  }

  reset(): void {
    this.state?.reset();
  }

  getAuthToken(): string | null {
    const { data } = this._authState.value;
    return data?.token || null;
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.getState.pipe(map((state) => {
      const { data } = state;
      return !!data?.token;
    }));
  }
}
