import {AuthState} from "../auth-state";
import {IAuthState} from "../interfaces/i-auth-state";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {IAuthEntity} from "../interfaces/i-auth-entity";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../../global";

export class BaseAuthState implements IAuthState{
  constructor(protected state: AuthState) {
  }

  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): void {
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void {
  }

  logout(logoutCommand:ICommand): void {
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void {
  }

  reset(): void {
  }

  protected deleteAuthSTateData(): void {
    this.state.storageProvider.removeItem('token');
    this.state.storageProvider.removeItem('user');
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
