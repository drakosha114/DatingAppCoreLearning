import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicRoutesRootScreenComponent} from "./screens/public-routes-root-screen/public-routes-root-screen.component";
import {PageNotFoundScreenComponent} from "./screens/page-not-found-screen/page-not-found-screen.component";
import {WelcomeScreenComponent} from "./screens/welcome-screen/welcome-screen.component";

const routes: Routes =[{
  path: '',
  component: PublicRoutesRootScreenComponent,
  children: [
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
      path: 'welcome',
      component: WelcomeScreenComponent
    },
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    },
    {
      path: 'page-not-found',
      component: PageNotFoundScreenComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutesRoutingModule { }
