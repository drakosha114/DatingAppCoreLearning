import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {IGuardCheck, IGuardCheckHandler, IGuardCheckParams} from "../../../interfaces";
import {BaseGuardClass} from "./base-guard-class";

export class CanActivateChildClass extends BaseGuardClass implements CanActivateChild {
  constructor(guardCheckProvider: IGuardCheck, guardCheckHandlerProvider?: IGuardCheckHandler) {
    super(guardCheckProvider, guardCheckHandlerProvider);
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const params: IGuardCheckParams = {
      activatedRoute: childRoute,
      state: state
    }
    return this.check(params);
  }
}
