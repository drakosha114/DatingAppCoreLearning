import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {IExecutableCommand} from "../../../global";

export interface IGlobalCommandsFactories {
  initAuthStateCommandFactory(): IExecutableCommand<IAuthEntity | null>;
  logoutCommandFactory(): IExecutableCommand<boolean>;
  addDataToAccountStorageFactory(): IExecutableCommand<any>;
  clearAccountStorageCommandFactory(): IExecutableCommand<any>;
  getDataFromAccountStorageCommandFactory(): IExecutableCommand<any>;
}
