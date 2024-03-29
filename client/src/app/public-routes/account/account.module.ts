import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountRootScreenComponent } from './screens/account-root-screen/account-root-screen.component';
import { AccountLoginScreenComponent } from './screens/account-login-screen/account-login-screen.component';
import { AccountRegisterScreenComponent } from './screens/account-register-screen/account-register-screen.component';
import {SharedModule} from "../../shared/shared.module";
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { RegisterContainerComponent } from './containers/register-container/register-container.component';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {AccountApiService} from "./services/account-api.service";
import {AccountFacadeService} from "./services/account-facade.service";
import {AccountCommandsFactories} from "./commands/account-commands-factories";
import {GlobalCommandFactory} from "../../services/commands";

@NgModule({
  declarations: [
    AccountRootScreenComponent,
    AccountLoginScreenComponent,
    AccountRegisterScreenComponent,
    LoginContainerComponent,
    RegisterContainerComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    AccountRoutingModule,
    SharedModule,
  ],
  providers: [
    AccountApiService,
    AccountFacadeService,
    { provide: AccountCommandsFactories, useClass: AccountCommandsFactories, deps: [GlobalCommandFactory, AccountApiService]},
  ]
})
export class AccountModule { }
