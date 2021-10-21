import {IAuthState} from "../interfaces/i-auth-state";
import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";

export class ProcessingState extends BaseAuthState implements IAuthState{

  constructor(authState: AuthState) {
    super(authState);
  }

  reset(): void {
    if(this.state.command) {
      this.state.command.reset();
      this.state.command = null;
      this.setNotLoggedInState();
    }
  }
}
