import {AuthState} from "../auth-state";
import {StartProcessingState} from "./start-processing-state";

export class NotLoggedInState extends StartProcessingState{

  constructor(authState: AuthState) {
    super(authState);
  }

}
