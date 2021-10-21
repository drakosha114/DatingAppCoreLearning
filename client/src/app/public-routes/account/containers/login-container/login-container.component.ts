import {Component, Injector} from '@angular/core';
import {ILoginPayload} from "../../../../services/interfaces";
import {AccountContainerBase} from "../../classes/account-container-base";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent extends AccountContainerBase {

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  public formSubmitHandler(loginModel: ILoginPayload): void {
    this.login(loginModel, () => this.router.navigate(['']).then(() => {}));
  }

}
