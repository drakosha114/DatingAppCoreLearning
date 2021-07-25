import {Component, Injector, OnInit} from '@angular/core';
import {AccountFacadeService} from "../../services/account-facade.service";
import {REGISTER_COMMAND_TOKEN} from "../../commands/register-command";
import {IExecutableCommand} from "../../../../global";
import {IAccountResponse, IRegisterPayload} from "../../../../services/interfaces";
import {AccountContainerBase} from "../../classes/account-container-base";

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent extends AccountContainerBase {

  constructor(injector: Injector) {
    super(injector);
  }

  formSubmitHandler(registerPayload: IRegisterPayload): void {
    this.register(registerPayload);
  }
}


