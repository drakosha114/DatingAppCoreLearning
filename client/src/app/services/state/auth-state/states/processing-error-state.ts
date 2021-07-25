import {AuthState} from "../auth-state";
import {StartProcessingState} from "./start-processing-state";

export class ProcessingErrorState extends StartProcessingState {

  constructor(authState: AuthState) {
    super(authState);
  }

}
