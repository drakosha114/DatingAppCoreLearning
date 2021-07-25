import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountRootScreenComponent} from "./screens/account-root-screen/account-root-screen.component";
import {AccountLoginScreenComponent} from "./screens/account-login-screen/account-login-screen.component";
import {AccountRegisterScreenComponent} from "./screens/account-register-screen/account-register-screen.component";

const routes: Routes = [
  {
    path: '',
    component: AccountRootScreenComponent,
    children: [{
      path: 'login',
      component: AccountLoginScreenComponent
    }, {
      path: 'register',
      component: AccountRegisterScreenComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
