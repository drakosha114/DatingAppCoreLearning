import { Injectable } from '@angular/core';
import {IAccountFacade} from "../interfaces/i-account-facade";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import { IEntityBase, IExecutableCommand} from "../../../global";
import {Observable} from "rxjs";
import {AuthState} from "../../../services/state";
import { ILoginPayload, IRegisterPayload} from "../../../services/interfaces";
import {
  observableErrorNotification,
  observableProgressNotification,
  observableResultNotification
} from "../../../shared";

@Injectable({
  providedIn: 'any'
})
export class AccountFacadeService implements IAccountFacade {
  state$: Observable<IEntityBase<IAuthEntity>> = this.authState.getState;

  constructor(private authState: AuthState) { }

  @observableProgressNotification<IAuthEntity>(
    {title: 'Account action', message: 'Sign in succeed!'},
    {title: 'Account actions', message: 'Sign in failed!'}
    )
  login(
    loginPayload: ILoginPayload,
    loginCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.authState.login(loginPayload, loginCommand);
  }

  @observableResultNotification<IAuthEntity>({title: 'Account action', message: 'Sign in succeed!'})
  @observableErrorNotification<IAuthEntity>({title: 'Account actions', message: 'Sign in failed!'})
  register(registerPayload: IRegisterPayload, registerCommand: IExecutableCommand<IAuthEntity>): Observable<IAuthEntity> {
    return this.authState.register(registerPayload, registerCommand);
  }

  reset() {
    this.authState.reset();
  }
}
