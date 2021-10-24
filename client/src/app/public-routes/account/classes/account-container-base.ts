import {IAccountFacade} from "../interfaces/i-account-facade";
import {Directive, Injector, OnDestroy} from "@angular/core";
import {AccountFacadeService} from "../services/account-facade.service";
import { IEntityBase } from "../../../global";
import {ILoginPayload, IRegisterPayload} from "../../../services/interfaces";
import {
  AccountCommandsFactories,
  IAccountCommandsFactory,
} from "../commands";
import {Observable, Subject} from "rxjs";
import {IAuthEntity} from "../../../services/state/auth-state/interfaces/i-auth-entity";
import {filter, map, takeUntil} from "rxjs/operators";

@Directive()
export class AccountContainerBase implements OnDestroy {

  // TODO: until destroy functionality
  private sbg$ = new Subject<boolean>();

  private readonly accountFacade: IAccountFacade = this.injector.get(AccountFacadeService);
  private readonly accountCommandsFactory: IAccountCommandsFactory = this.injector.get(AccountCommandsFactories);
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
    this.sbg$.next(true);
    this.sbg$.complete();
  }

  protected login(loginModel: ILoginPayload, onSuccessCallback: () => void): void {
    const loginCommand = this.accountCommandsFactory.loginMacroCommandFactory();
    this.accountFacade.login(loginModel, loginCommand).pipe(takeUntil(this.sbg$)).subscribe(_ => {
      onSuccessCallback();
    });
  }

  protected register(registerModel: IRegisterPayload, onSuccessCallback: () => void): void {
    const registerCommand = this.accountCommandsFactory.registerMacroCommandFactory();
    this.accountFacade.register(registerModel, registerCommand).pipe(takeUntil(this.sbg$)).subscribe(_ => {
      onSuccessCallback();
    });
  }
}
