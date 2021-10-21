import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AUTH_CHILD_GUARD_TOKEN,
  AUTH_GUARD_TOKEN,
  NOT_AUTH_CHILD_GUARD_TOKEN,
  NOT_AUTH_GUARD_TOKEN
} from "./services/guards";

const routes: Routes = [{
    path: '',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./private-routes/private-routes.module').then(m => m.PrivateRoutesModule),
    canActivate: [AUTH_GUARD_TOKEN],
    canActivateChild: [AUTH_CHILD_GUARD_TOKEN],
  }, {
    path: '',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./public-routes/public-routes.module').then(m => m.PublicRoutesModule),
    canActivate: [NOT_AUTH_GUARD_TOKEN],
    canActivateChild: [NOT_AUTH_CHILD_GUARD_TOKEN]
  }, {
    path: '',
    redirectTo: 'members',
    pathMatch: 'full'
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-not-found'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
