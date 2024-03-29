import { NgModule } from '@angular/core';
import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    SharedModule,
    ListsRoutingModule
  ]
})
export class ListsModule { }
