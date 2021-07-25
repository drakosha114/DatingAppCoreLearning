import {Observable} from "rxjs";
import {IGuardCheckParams} from "./i-guard-check-params";

export interface IGuardCheck {
  check(params: IGuardCheckParams): Observable<boolean> | Promise<boolean> | boolean;
}
