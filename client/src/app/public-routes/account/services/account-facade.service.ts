import { Injectable } from '@angular/core';
import {IAccountFacade} from "../interfaces/i-account-facade";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../global";
import {Observable} from "rxjs";
import {AuthState} from "../../../services/state";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../services/interfaces";

@Injectable({
  providedIn: 'any'
})
export class AccountFacadeService implements IAccountFacade {
  state$: Observable<IEntityBase<IAuthEntity>> = this.authState.getState;

  constructor(private authState: AuthState) { }

  login(loginPayload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, successLoggedInCommand: ICommand): void {
    this.authState.login(loginPayload, loginCommand, successLoggedInCommand);
  }

  register(registerPayload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, successRegisterCommand: ICommand): void {
  }

  reset() {
    this.authState.reset();
  }
}
