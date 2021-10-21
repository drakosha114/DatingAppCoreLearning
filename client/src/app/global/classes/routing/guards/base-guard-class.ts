import {IGuardCheck, IGuardCheckHandler, IGuardCheckParams} from "../../../interfaces";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

export class BaseGuardClass {
  constructor(protected guardCheckProvider: IGuardCheck, protected guardCheckHandlerProvider?: IGuardCheckHandler) {
  }

  protected check(params: IGuardCheckParams): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const checkResult = this.guardCheckProvider.check(params);
    if(!this.guardCheckHandlerProvider) {
      return checkResult;
    }
    return this.guardCheckHandlerProvider.checkHandler(checkResult, params);
  }
}
