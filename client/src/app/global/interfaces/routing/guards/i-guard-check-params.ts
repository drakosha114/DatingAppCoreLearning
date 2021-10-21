import {ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment} from "@angular/router";

export interface IGuardCheckParams {
  activatedRoute?: ActivatedRouteSnapshot;
  state?: RouterStateSnapshot;
  segments?:	UrlSegment[];
  route?: Route
}
