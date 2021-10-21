import {BaseGuardClass} from "./base-guard-class";
import {CanLoad, Route, UrlSegment, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {IGuardCheck, IGuardCheckHandler, IGuardCheckParams} from "../../../interfaces";

export class CanLoadClass extends BaseGuardClass implements CanLoad {
  constructor(guardCheckProvider: IGuardCheck, guardCheckHandlerProvider?: IGuardCheckHandler) {
    super(guardCheckProvider, guardCheckHandlerProvider);
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const params: IGuardCheckParams = {
      route: route,
      segments: segments
    }
    return this.check(params);
  }

}
