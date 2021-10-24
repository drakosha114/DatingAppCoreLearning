import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members.component';
import {CAN_LOAD_AUTH_GUARD_TOKEN} from "../../services/guards";

const routes: Routes = [
  {
    path: '',
    component: MembersComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./member/member.module').then(m => m.MemberModule),
    canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
