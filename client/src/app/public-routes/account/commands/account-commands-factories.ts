/*import {AccountCommandsTypes} from "./account-commands-types";*/
import {IExecutableCommand} from "../../../global";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
/*import {AddDataToAccountStorage, GetDataFromAccountStorage} from "../../../services/commands/account-storage";
import {inject} from "@angular/core";
import {ACCOUNT_STORE_TOKEN} from "../../../services/store";*/
import {LoginMacroCommand} from "./login-macro-command/login-macro-command";
/*import {LOGIN_COMMAND_TOKEN} from "./login-command";*/
import {IAccountCommandsFactory} from "./interfaces";
import {IAccountApi} from "../interfaces/i-account-api";
import {IGlobalCommandsFactories} from "../../../services/commands/interfaces";
import {LoginCommand} from "./login-command/login-command";
import {RegisterCommand} from "./register-command/register-command";
import {RegisterMacroCommand} from "./register-macro-command";

/*export function accountCommandsFactories(commandType: AccountCommandsTypes): IExecutableCommand<IAuthEntity | null> {
  switch (commandType) {
    case AccountCommandsTypes.LoginCommand: {
      const getDataFromAccountStorageCommand = new AddDataToAccountStorage(inject(ACCOUNT_STORE_TOKEN));
      return new LoginMacroCommand(inject(LOGIN_COMMAND_TOKEN), getDataFromAccountStorageCommand);
    }
    case AccountCommandsTypes.RegisterCommand: {
      // toto REWORK
      const getDataFromAccountStorageCommand = new AddDataToAccountStorage(inject(ACCOUNT_STORE_TOKEN));
      return new LoginMacroCommand(inject(LOGIN_COMMAND_TOKEN), getDataFromAccountStorageCommand);
    }
    default: {
      throw new Error('Unsupported command');
    }
  }
}*/

export class AccountCommandsFactories implements IAccountCommandsFactory {
  constructor(
    private readonly globalCommandsFactoryProvider: IGlobalCommandsFactories,
    private readonly accountApiProvider: IAccountApi) {
  }

  loginCommandFactory(): IExecutableCommand<IAuthEntity> {
    return new LoginCommand(this.accountApiProvider);
  }

  loginMacroCommandFactory(): IExecutableCommand<IAuthEntity> {
    const loginCommand = this.loginCommandFactory();
    const addDataToAccountStoreCommand = this.globalCommandsFactoryProvider.addDataToAccountStorageFactory();
    return new LoginMacroCommand(loginCommand, addDataToAccountStoreCommand);
  }

  registerCommandFactory(): IExecutableCommand<IAuthEntity> {
    return new RegisterCommand(this.accountApiProvider);
  }

  registerMacroCommandFactory(): IExecutableCommand<IAuthEntity> {
    const registerCommand = this.registerCommandFactory();
    const addDataToAccountStoreCommand = this.globalCommandsFactoryProvider.addDataToAccountStorageFactory();
    return new RegisterMacroCommand(registerCommand, addDataToAccountStoreCommand);
  }
}
