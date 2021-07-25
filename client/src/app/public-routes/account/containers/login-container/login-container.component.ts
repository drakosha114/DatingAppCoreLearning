import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {AccountFacadeService} from "../../services/account-facade.service";
import {LOGIN_COMMAND_TOKEN} from "../../commands/login-command";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../../global";
import {IAccountResponse, ILoginPayload} from "../../../../services/interfaces";
import {Observable} from "rxjs";
import {IAuthEntity} from "../../../../services/state/auth-state/interfaces/i-auth-entity";
import {map} from "rxjs/operators";
import {REDIRECT_TO_PROTECTED_ROUTE_COMMAND_TOKEN} from "../../commands";
import {AccountContainerBase} from "../../classes/account-container-base";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent extends AccountContainerBase {

  constructor(injector: Injector) {
    super(injector);
  }

  public formSubmitHandler(loginModel: ILoginPayload): void {
    this.login(loginModel);
  }

}
