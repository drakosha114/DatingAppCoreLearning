import {Observable} from "rxjs";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../global";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../services/interfaces";

export interface IAccountFacade {
  state$: Observable<IEntityBase<IAuthEntity>>;
  login(loginPayload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, successLoggedInCommand: ICommand): void;
  register(registerPayload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, successRegisterCommand: ICommand): void;
  reset(): void;
}
