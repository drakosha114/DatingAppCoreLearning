import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {ICommand} from "../../../../global";

export class LoggedInState extends BaseAuthState {

  constructor(authState: AuthState) {
    super(authState);
  }

  logout(logoutCommand: ICommand): void {
    logoutCommand.execute();
  }

}
