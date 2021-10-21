import { NgModule } from '@angular/core';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    SharedModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
