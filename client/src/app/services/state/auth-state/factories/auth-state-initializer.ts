import {AuthState} from "../auth-state";
import {Injector} from "@angular/core";
import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../interfaces/i-auth-entity";
import {INIT_AUTH_STATE_COMMAND_TOKEN} from "../../../commands";

export function authStateInitializer(authState: AuthState, injector: Injector): () => Promise<boolean> {
  return function () {
    const initAuthStateCommand: IExecutableCommand<IAuthEntity | null> = injector.get(INIT_AUTH_STATE_COMMAND_TOKEN);
    return new Promise((res) => {
      authState.init(initAuthStateCommand);
      res(true);
    });
  }
}
