import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutesRoutingModule } from './private-routes-routing.module';
import { PrivateRoutesRootScreenComponent } from './screens/private-routes-root-screen/private-routes-root-screen.component';
import {SharedModule} from "../shared/shared.module";
import {ServicesModule} from "../services/services.module";
import { PageNotFoundScreenComponent } from './screens/page-not-found-screen/page-not-found-screen.component';
import {AppFacadeService} from "./services";
import {AuthState} from "../services/state";
import {GlobalCommandFactory} from "../services/commands";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    PrivateRoutesRootScreenComponent,
    PageNotFoundScreenComponent,
    MainMenuComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutesRoutingModule,
    ServicesModule.forFeature()
  ],
  providers: [
    { provide: AppFacadeService, useClass: AppFacadeService, deps: [AuthState, GlobalCommandFactory]}
  ]
})
export class PrivateRoutesModule { }
