import { InjectionToken } from "@angular/core";
import { CanActivate, CanActivateChild, CanLoad } from "@angular/router";
import { IGuardCheckHandler } from "src/app/global";


export const AUTH_GUARD_TOKEN = new InjectionToken<CanActivate>('AuthGuardService');
export const AUTH_CHILD_GUARD_TOKEN = new InjectionToken<CanActivateChild>('AuthChildrenGuardService');
export const CAN_LOAD_AUTH_GUARD_TOKEN = new InjectionToken<CanLoad>('CanLoadAuthGuardToken');
export const NOT_AUTH_GUARD_TOKEN = new InjectionToken<CanActivate>('NotAuthGuardService');
export const NOT_AUTH_CHILD_GUARD_TOKEN = new InjectionToken<CanActivateChild>('NotAuthChildrenGuardService');

export const AUTH_GUARD_CHECK_HANDLER_TOKEN = new InjectionToken<IGuardCheckHandler>('AuthGuardCheckHandlerService');
export const NOT_AUTH_GUARD_CHECK_HANDLER_TOKEN = new InjectionToken<IGuardCheckHandler>('NotAuthGuardCHeckHandlerService');

export const CAN_ACTIVATE_TYPE_TOKEN = new InjectionToken<string>('CanActivateType');
export const CAN_ACTIVATE_CHILD_TYPE_TOKEN = new InjectionToken<string>('CanActivateChildType');
export const CAN_LOAD_TYPE_TOKEN = new InjectionToken<string>('CanLoadType');

export const AUTH_REDIRECT_URL_TOKEN  = new InjectionToken<string>('AuthRedirectUrl', {factory: () => 'account/login'});
export const NOT_AUTH_REDIRECT_URL_TOKEN  = new InjectionToken<string>('NotAuthRedirectUrl', {factory: () => ''});
