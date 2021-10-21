import { ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {Observable} from "rxjs";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "./i-auth-entity";

export interface IAuthState {
  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): Observable<boolean>;
  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity>;
  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity>;
  logout(logoutCommand: IExecutableCommand<boolean>): Observable<boolean>;
  reset(): void;
}
