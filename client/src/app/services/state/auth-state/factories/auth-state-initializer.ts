import {AuthState} from "../auth-state";
import {Injector} from "@angular/core";
import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../interfaces/i-auth-entity";
import {GlobalCommandFactory} from "../../../commands";
import {IGlobalCommandsFactories} from "../../../commands/interfaces";

export function authStateInitializer(authState: AuthState, injector: Injector): () => Promise<boolean> {
  return function () {
    const globalCommandsFactory: IGlobalCommandsFactories = injector.get(GlobalCommandFactory);
    const initAuthStateCommand: IExecutableCommand<IAuthEntity | null> = globalCommandsFactory.initAuthStateCommandFactory();
    return new Promise((res) => {
      authState.init(initAuthStateCommand).toPromise().then( _ => res(true)).catch( _ => res(true));
    });
  }
}
