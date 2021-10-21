import {InjectionToken} from "@angular/core";
import {IGuardCheck} from "../../../global";

export const NOT_AUTH_GUARD_CHECK_TOKEN = new InjectionToken<IGuardCheck>('AuthGuardCheckService');
