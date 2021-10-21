import {Component, Injector} from '@angular/core';
import {IRegisterPayload} from "../../../../services/interfaces";
import {AccountContainerBase} from "../../classes/account-container-base";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent extends AccountContainerBase {

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  formSubmitHandler(registerPayload: IRegisterPayload): void {
    this.register(registerPayload, () => this.router.navigate(['']).then(() => {}));
  }
}


