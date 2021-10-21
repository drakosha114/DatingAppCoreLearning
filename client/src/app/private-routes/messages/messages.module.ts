import { NgModule } from '@angular/core';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    SharedModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
