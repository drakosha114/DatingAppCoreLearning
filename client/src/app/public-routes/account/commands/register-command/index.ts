import { RegisterCommand } from './register-command';
import {inject, InjectionToken} from "@angular/core";
import {IExecutableCommand, StoreClass} from "../../../../global";
import {IAccountResponse} from "../../../../services/interfaces";
import {AccountApiService} from "../../services/account-api.service";

export const REGISTER_COMMAND_TOKEN = new InjectionToken<IExecutableCommand<IAccountResponse>>('RegisterCommand', {
  providedIn: "any",
  factory: () => {
    return new RegisterCommand(inject(AccountApiService), inject(StoreClass));
  }
})
