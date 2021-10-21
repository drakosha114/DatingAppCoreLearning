import {IExecutableCommand} from "../../global";
import {LogoutCommand} from "./logout-command";
import {AddDataToAccountStorage, ClearAccountStorage, GetDataFromAccountStorage} from "./account-storage";
import {InitAuthStateCommand} from "./init-auth-state-command";
import {IGlobalCommandsFactories} from "./interfaces";
import {IAuthEntity} from "../state/auth-state/interfaces/i-auth-entity";
import {IAccountStore} from "../interfaces";

export class GlobalCommandFactory implements IGlobalCommandsFactories {

  constructor(private readonly accountStorageProvider: IAccountStore) {
  }

  addDataToAccountStorageFactory(): IExecutableCommand<IAuthEntity> {
    return new AddDataToAccountStorage(this.accountStorageProvider);
  }

  clearAccountStorageCommandFactory(): IExecutableCommand<boolean> {
    return new ClearAccountStorage(this.accountStorageProvider);
  }

  getDataFromAccountStorageCommandFactory(): IExecutableCommand<IAuthEntity | null> {
    return new GetDataFromAccountStorage(this.accountStorageProvider);
  }

  initAuthStateCommandFactory(): IExecutableCommand<IAuthEntity | null> {
    const getDataFromAccountStorageCommand = this.getDataFromAccountStorageCommandFactory();
    return new InitAuthStateCommand(getDataFromAccountStorageCommand);
  }

  logoutCommandFactory(): IExecutableCommand<boolean> {
    const clearAccountStorageCommand = this.clearAccountStorageCommandFactory();
    return new LogoutCommand(clearAccountStorageCommand);
  }
}
