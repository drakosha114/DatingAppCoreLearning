import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicRoutesRootScreenComponent} from "./screens/public-routes-root-screen/public-routes-root-screen.component";
import {PageNotFoundScreenComponent} from "./screens/page-not-found-screen/page-not-found-screen.component";

const routes: Routes =[{
  path: '',
  component: PublicRoutesRootScreenComponent,
  children: [
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
      path: '',
      redirectTo: 'account',
      pathMatch: 'full'
    }, /*{
      path: '**',
      component: PageNotFoundScreenComponent,
      pathMatch: 'full'
    }*/
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutesRoutingModule { }
