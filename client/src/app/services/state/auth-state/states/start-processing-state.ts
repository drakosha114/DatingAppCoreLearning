import {BaseAuthState} from "./bace-auth-state";
import {AuthState} from "../auth-state";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../interfaces";
import {Observable} from "rxjs";
import {ICommand, IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../interfaces/i-auth-entity";

export class StartProcessingState extends BaseAuthState {
  constructor(state: AuthState) {
    super(state);
  }

  login(payload: ILoginPayload, loginCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand) {
    this.setProcessingState();
    this.state.command = loginCommand;
    loginCommand.execute(payload).subscribe((resp: IAccountResponse) => {
      this.state.command = null;
      const { token, userName} = resp;
      this.actionSuccessCallback(token, {userName});
      onSuccessRedirectCommand.execute();
    }, (error) => {
      this.actionErrorCallback(error);
    });
  }

  register(payload: IRegisterPayload, registerCommand: IExecutableCommand<IAccountResponse>, onSuccessRedirectCommand: ICommand) {
    // this.startProcessingAction(request, onSuccessCallback);
  }

  private actionSuccessCallback(token: string, user: any) {
    this.setLoggedInState(token, user);
  }

  private actionErrorCallback(error: any) {
    this.setErrorState(error);
  }

}
