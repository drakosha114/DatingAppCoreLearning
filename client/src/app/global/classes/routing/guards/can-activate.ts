import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {IGuardCheck, IGuardCheckHandler, IGuardCheckParams} from "../../../interfaces";
import {BaseGuardClass} from "./base-guard-class";

export class CanActivateClass extends BaseGuardClass implements CanActivate {
  constructor(guardCheckProvider: IGuardCheck, guardCheckHandlerProvider?: IGuardCheckHandler) {
    super(guardCheckProvider, guardCheckHandlerProvider);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const params: IGuardCheckParams = {
      activatedRoute: route,
      state
    }
    return this.check(params);
  }
}
