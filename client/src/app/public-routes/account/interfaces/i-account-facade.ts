import {Observable} from "rxjs";
import {IEntityBase, IExecutableCommand} from "../../../global";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import {ILoginPayload, IRegisterPayload} from "../../../services/interfaces";

export interface IAccountFacade {
  state$: Observable<IEntityBase<IAuthEntity>>;
  login(loginPayload: ILoginPayload, loginCommand: IExecutableCommand<IAuthEntity>): Observable<any>;
  register(registerPayload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<any>;
  reset(): void;
}
