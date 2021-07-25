import {ICommand} from "../../../global";
import {Router} from "@angular/router";

export class LogoutCommand implements ICommand{

  constructor(private router: Router, private storage: Storage) {
  }

  execute(): void {

  }

  reset(): void {
  }
}
