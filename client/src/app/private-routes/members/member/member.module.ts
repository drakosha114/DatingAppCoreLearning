import { NgModule } from '@angular/core';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import {SharedModule} from "../../../shared";


@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    SharedModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
