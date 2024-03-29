import { NgModule } from '@angular/core';

import { PublicRoutesRoutingModule } from './public-routes-routing.module';
import { PublicRoutesRootScreenComponent } from './screens/public-routes-root-screen/public-routes-root-screen.component';
import {SharedModule} from "../shared/shared.module";
import { PageNotFoundScreenComponent } from './screens/page-not-found-screen/page-not-found-screen.component';
import { WelcomeScreenComponent } from './screens/welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    PublicRoutesRootScreenComponent,
    PageNotFoundScreenComponent,
    WelcomeScreenComponent
  ],
  imports: [
    PublicRoutesRoutingModule,
    SharedModule,
  ],
  providers: [

  ]
})
export class PublicRoutesModule { }
