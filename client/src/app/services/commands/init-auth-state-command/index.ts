import {inject, InjectionToken} from "@angular/core";
import {IExecutableCommand, StoreClass} from "../../../global";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {InitAuthStateCommand} from "./init-auth-state-command";

export const INIT_AUTH_STATE_COMMAND_TOKEN = new InjectionToken<IExecutableCommand<IAuthEntity | null>>('InitAuthStateCommand', {
  providedIn: 'any',
  factory: () => new InitAuthStateCommand(inject(StoreClass))
})
