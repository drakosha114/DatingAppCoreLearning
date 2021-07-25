import { LoginCommand } from './login-command';
import {inject, InjectionToken} from "@angular/core";
import {IExecutableCommand, StoreClass} from "../../../../global";
import {IAccountResponse} from "../../../../services/interfaces";
import {AccountApiService} from "../../services/account-api.service";

export const LOGIN_COMMAND_TOKEN = new InjectionToken<IExecutableCommand<IAccountResponse>>('LoginCommand', {
  providedIn: "any",
  factory: () => {
    return new LoginCommand(inject(AccountApiService), inject(StoreClass));
  }
})
