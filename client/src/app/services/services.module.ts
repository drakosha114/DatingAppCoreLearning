import {APP_INITIALIZER, Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {BROWSER_STORAGE} from './store';
import {
  guardsFactory,
  RouterGuardsEnum,
  StoreClass,
  InvertGuardCheckDecorator,
  GuardCheckHandlerClass
} from "../global";

import {
  AUTH_CHILD_GUARD_TOKEN,
  AUTH_GUARD_CHECK_HANDLER_TOKEN,
  AUTH_GUARD_CHECK_TOKEN,
  AUTH_GUARD_TOKEN,
  AUTH_REDIRECT_URL_TOKEN,
  AuthGuardCheckService,
  CAN_ACTIVATE_CHILD_TYPE_TOKEN,
  CAN_ACTIVATE_TYPE_TOKEN,
  CAN_LOAD_AUTH_GUARD_TOKEN,
  CAN_LOAD_TYPE_TOKEN, NOT_AUTH_CHILD_GUARD_TOKEN,
  NOT_AUTH_GUARD_CHECK_HANDLER_TOKEN,
  NOT_AUTH_GUARD_CHECK_TOKEN,
  NOT_AUTH_GUARD_TOKEN,
  NOT_AUTH_REDIRECT_URL_TOKEN
} from "./guards";
import {Router} from "@angular/router";
import {AuthState, authStateInitializer} from "./state";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthTokenInterceptor} from "./interceptors";

@NgModule()
export class ServicesModule {
  public static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: BROWSER_STORAGE, useValue: localStorage },
        { provide: AUTH_REDIRECT_URL_TOKEN, useValue: 'account/login'},
        { provide: NOT_AUTH_REDIRECT_URL_TOKEN, useValue: ''},
        { provide: StoreClass, useClass: StoreClass, deps: [BROWSER_STORAGE]},
        { provide: AuthState, useClass: AuthState, deps: [StoreClass] },
        { provide: APP_INITIALIZER, useFactory: authStateInitializer, deps: [AuthState, Injector], multi: true},
        { provide: AUTH_GUARD_CHECK_TOKEN, useClass: AuthGuardCheckService, deps: [AuthState]},
        { provide: NOT_AUTH_GUARD_CHECK_TOKEN, useClass: InvertGuardCheckDecorator, deps: [AUTH_GUARD_CHECK_TOKEN]},
        { provide: AUTH_GUARD_CHECK_HANDLER_TOKEN, useClass: GuardCheckHandlerClass, deps: [Router, AUTH_REDIRECT_URL_TOKEN]},
        { provide: NOT_AUTH_GUARD_CHECK_HANDLER_TOKEN, useClass: GuardCheckHandlerClass, deps: [Router, NOT_AUTH_REDIRECT_URL_TOKEN]},
        { provide: CAN_ACTIVATE_TYPE_TOKEN, useValue: RouterGuardsEnum.CanActivate},
        { provide: CAN_ACTIVATE_CHILD_TYPE_TOKEN, useValue: RouterGuardsEnum.CanActivateChild},
        { provide: CAN_LOAD_TYPE_TOKEN, useValue: RouterGuardsEnum.CanLoad},
        { provide: AUTH_GUARD_TOKEN, useFactory: guardsFactory, deps: [CAN_ACTIVATE_TYPE_TOKEN, AUTH_GUARD_CHECK_TOKEN, AUTH_GUARD_CHECK_HANDLER_TOKEN]},
        { provide: NOT_AUTH_GUARD_TOKEN, useFactory: guardsFactory, deps: [CAN_ACTIVATE_TYPE_TOKEN, NOT_AUTH_GUARD_CHECK_TOKEN, NOT_AUTH_GUARD_CHECK_HANDLER_TOKEN]},
        { provide: AUTH_CHILD_GUARD_TOKEN, useFactory: guardsFactory, deps: [CAN_ACTIVATE_CHILD_TYPE_TOKEN, AUTH_GUARD_CHECK_TOKEN, AUTH_GUARD_CHECK_HANDLER_TOKEN]},
        { provide: NOT_AUTH_CHILD_GUARD_TOKEN, useFactory: guardsFactory, deps: [CAN_ACTIVATE_CHILD_TYPE_TOKEN, NOT_AUTH_GUARD_CHECK_TOKEN, NOT_AUTH_GUARD_CHECK_HANDLER_TOKEN]},
        { provide: CAN_LOAD_AUTH_GUARD_TOKEN, useFactory: guardsFactory, deps: [CAN_LOAD_TYPE_TOKEN, AUTH_GUARD_CHECK_TOKEN, AUTH_GUARD_CHECK_HANDLER_TOKEN]},
      ]
    };
  }

  public static forFeature(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, deps: [AuthState], multi: true}
      ]
    }
  }
}
