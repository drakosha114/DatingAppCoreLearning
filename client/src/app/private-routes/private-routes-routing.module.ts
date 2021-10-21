import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateRoutesRootScreenComponent} from "./screens/private-routes-root-screen/private-routes-root-screen.component";
import {PageNotFoundScreenComponent} from "./screens/page-not-found-screen/page-not-found-screen.component";
import {CAN_LOAD_AUTH_GUARD_TOKEN} from "../services/guards";

const routes: Routes = [{
  path: '',
  component: PrivateRoutesRootScreenComponent,
  children: [
    {
      path: 'members',
      loadChildren: () => import('./members/members.module').then(m => m.MembersModule),
      canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
    },
    {
      path: 'messages',
      loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
      canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
    },
    {
      path: 'member',
      loadChildren: () => import('./member/member.module').then(m => m.MemberModule),
      canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
    },
    {
      path: 'lists',
      loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule),
      canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canLoad: [CAN_LOAD_AUTH_GUARD_TOKEN]
    },
    {
      path: '',
      redirectTo: 'members',
      pathMatch: 'full'
    },
    {
      path: 'page-not-found',
      component: PageNotFoundScreenComponent,
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutesRoutingModule { }
