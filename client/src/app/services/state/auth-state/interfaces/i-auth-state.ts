import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {Observable} from "rxjs";
import {ICommand, IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "./i-auth-entity";

export interface IAuthState {
  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): void;
  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void;
  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand): void;
  logout(logoutCommand: ICommand): void;

  reset(): void;
}
