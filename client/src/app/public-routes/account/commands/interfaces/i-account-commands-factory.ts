import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../../../../services/state/auth-state/interfaces/i-auth-entity";

export interface IAccountCommandsFactory {
  loginCommandFactory(): IExecutableCommand<IAuthEntity>;
  loginMacroCommandFactory(): IExecutableCommand<IAuthEntity>;
  registerCommandFactory(): IExecutableCommand<IAuthEntity>;
  registerMacroCommandFactory(): IExecutableCommand<IAuthEntity>;
}
