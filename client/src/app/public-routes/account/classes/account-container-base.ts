import {IAccountFacade} from "../interfaces/i-account-facade";
import {Directive, Injector, OnDestroy} from "@angular/core";
import {AccountFacadeService} from "../services/account-facade.service";
import {ICommand, IEntityBase, IExecutableCommand} from "../../../global";
import {IAccountResponse, ILoginPayload, IRegisterPayload} from "../../../services/interfaces";
import {LOGIN_COMMAND_TOKEN, REDIRECT_TO_PROTECTED_ROUTE_COMMAND_TOKEN, REGISTER_COMMAND_TOKEN} from "../commands";
import {Observable} from "rxjs";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import {filter, map} from "rxjs/operators";

@Directive()
export class AccountContainerBase implements OnDestroy {

  private accountFacade: IAccountFacade = this.injector.get(AccountFacadeService);
  private LOGIN_COMMAND: IExecutableCommand<IAccountResponse> = this.injector.get(LOGIN_COMMAND_TOKEN);
  private REDIRECT_TO_PROTECTED_SCREEN_COMMAND: ICommand = this.injector.get(REDIRECT_TO_PROTECTED_ROUTE_COMMAND_TOKEN);
  private REGISTER_COMMAND: IExecutableCommand<IAccountResponse> = this.injector.get(REGISTER_COMMAND_TOKEN);

  private accountState$: Observable<IEntityBase<IAuthEntity>> = this.accountFacade.state$;

  public isLoading$: Observable<boolean> = this.accountState$.pipe(
    map(state => state.isLoading)
  );

  public processingError$: Observable<any> = this.accountState$.pipe(
    filter(state => state.isLoaded),
    map(state => state.error)
  );

  constructor(protected injector: Injector) {
  }

  ngOnDestroy(): void {
    this.accountFacade.reset();
  }

  protected login(loginModel: ILoginPayload): void {
    this.accountFacade.login(loginModel, this.LOGIN_COMMAND, this.REDIRECT_TO_PROTECTED_SCREEN_COMMAND);
  }

  protected register(registerModel: IRegisterPayload): void {
    this.accountFacade.register(registerModel, this.REGISTER_COMMAND, this.REDIRECT_TO_PROTECTED_SCREEN_COMMAND);
  }
}
