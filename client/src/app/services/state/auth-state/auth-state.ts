import {IAuthState} from "./interfaces/i-auth-state";
import {IAuthEntity} from "./interfaces/i-auth-entity";
import {IAuthService, ICommand, IEntityBase, IExecutableCommand, IStoreBase, IStoreService} from "../../../global";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
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

  constructor(public readonly storageProvider: IStoreService) {
    this.notInitializedState = new NotInitializedState(this);
    this.notLoggedInState = new NotLoggedInState(this);
    this.processingState = new ProcessingState(this);
    this.processingErrorState = new ProcessingErrorState(this);
    this.loggedInState = new LoggedInState(this);

    this.state = this.notInitializedState;
  }

  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): void {
    this.state?.init(initAuthStateCommand);
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void {
    this.state?.login(payload, loginCommand, onSuccessRedirectCommand);
  }

  logout(logoutCommand:ICommand): void {
    this.state?.logout(logoutCommand);
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void {
    this.state?.register(payload, registerCommand, onSuccessRedirectCommand);
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
