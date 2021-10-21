import {UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {IGuardCheckParams} from "./i-guard-check-params";

export interface IGuardCheckHandler {
  checkHandler(checkResult: Observable<boolean> | Promise<boolean> | boolean, params: IGuardCheckParams): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}
