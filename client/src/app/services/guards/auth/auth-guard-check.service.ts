import {InjectionToken} from '@angular/core';
import {IAuthService, IGuardCheck, IGuardCheckParams} from "../../../global";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export const AUTH_GUARD_CHECK_TOKEN = new InjectionToken<IGuardCheck>('AuthGuardCheckService');

export class AuthGuardCheckService implements IGuardCheck{

  constructor(private authService: IAuthService) { }

  check(): Observable<boolean> {
    return this.authService.isUserLoggedIn();
  }
}
