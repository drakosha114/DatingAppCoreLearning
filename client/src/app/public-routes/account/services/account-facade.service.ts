import { Injectable } from '@angular/core';
import {IAccountFacade} from "../interfaces/i-account-facade";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import { IEntityBase, IExecutableCommand} from "../../../global";
import {Observable} from "rxjs";
import {AuthState} from "../../../services/state";
import { ILoginPayload, IRegisterPayload} from "../../../services/interfaces";

@Injectable({
  providedIn: 'any'
})
export class AccountFacadeService implements IAccountFacade {
  state$: Observable<IEntityBase<IAuthEntity>> = this.authState.getState;

  constructor(private authState: AuthState) { }

  login(
    loginPayload: ILoginPayload,
    loginCommand: IExecutableCommand<IAuthEntity>): Observable<any> {
    return this.authState.login(loginPayload, loginCommand);
  }

  register(registerPayload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<any> {
    return this.authState.register(registerPayload, registerCommand);
  }

  reset() {
    this.authState.reset();
  }
}
