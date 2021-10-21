import {InjectionToken} from "@angular/core";
import {CanActivate, CanActivateChild} from "@angular/router";
import {RouterGuardsEnum} from "../../global";

export * from './auth';

export const AUTH_GUARD_TOKEN = new InjectionToken<CanActivate>('AuthGuardService');
export const AUTH_CHILD_GUARD_TOKEN = new InjectionToken<CanActivateChild>('AuthChildrenGuardService');

export const CAN_ACTIVATE_TYPE_TOKEN = new InjectionToken<string>('CanActivateType', {
  providedIn: 'root',
  factory: () => RouterGuardsEnum.CanActivate.toString()
});

export const CAN_ACTIVATE_CHILD_TYPE_TOKEN = new InjectionToken<string>('CanActivateChildType', {
  providedIn: 'root',
  factory: () => RouterGuardsEnum.CanActivateChild.toString()
})
