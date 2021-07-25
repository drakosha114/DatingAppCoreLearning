import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutesRoutingModule } from './private-routes-routing.module';
import { PrivateRoutesRootScreenComponent } from './screens/private-routes-root-screen/private-routes-root-screen.component';
import {SharedModule} from "../shared/shared.module";
import {ServicesModule} from "../services/services.module";
import { PageNotFoundScreenComponent } from './screens/page-not-found-screen/page-not-found-screen.component';

@NgModule({
  declarations: [
    PrivateRoutesRootScreenComponent,
    PageNotFoundScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutesRoutingModule,
    ServicesModule.forFeature()
  ],
  providers: [

  ]
})
export class PrivateRoutesModule { }
