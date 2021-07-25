import {ICommand} from "../../../../global";
import {Router} from "@angular/router";

export class RedirectToProtectedRouteCommand implements ICommand {

  constructor(private router: Router) {
  }
  execute(): void {
    this.router.navigate(['']).then(() => {});
  }

  reset(): void {
  }
}
