import {IAuthState} from "../interfaces/i-auth-state";
import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../interfaces/i-auth-entity";

export class NotInitializedState extends BaseAuthState implements IAuthState {

  constructor(authState: AuthState) {
    super(authState);
  }

  // todo - instead void promise should be returned???
  init(initAuthStateCommand: IExecutableCommand<IAuthEntity | null>): void {
    initAuthStateCommand.execute().subscribe((authEntity: IAuthEntity | null) => {
      const { user, token } = authEntity || {};
      if (user && token) {
        this.setLoggedInState(token, user);
      } else {
        this.setNotLoggedInState();
      }
    });
  }
}
