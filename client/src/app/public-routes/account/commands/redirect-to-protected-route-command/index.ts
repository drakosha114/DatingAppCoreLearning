import {inject, InjectionToken} from "@angular/core";
import {RedirectToProtectedRouteCommand} from "./redirect-to-protected-route-command";
import {Router} from "@angular/router";

export const REDIRECT_TO_PROTECTED_ROUTE_COMMAND_TOKEN = new InjectionToken<RedirectToProtectedRouteCommand>('RedirectToProtectedRouteCommand',
  {
    providedIn: 'any',
    factory: () => new RedirectToProtectedRouteCommand(inject(Router))
  }
);
