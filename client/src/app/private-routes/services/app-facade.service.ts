import {IAppFacade} from "../interfaces";
import {IAuthState} from "../../services/state/auth-state/interfaces/i-auth-state";
import {Observable} from "rxjs";
import {IGlobalCommandsFactories} from "../../services/commands";
import {IStoreBase} from "../../global";
import {IAuthEntity} from "../../services/state/auth-state/interfaces/i-auth-entity";
import {map} from "rxjs/operators";
import {observableProgressNotification} from "../../shared";

export class AppFacadeService implements IAppFacade {

  readonly userProfile: Observable<any> = this.authStoreProvider.getState.pipe(
    map(state => state.data?.user)
  );

  constructor(
    private readonly authStoreProvider: IStoreBase<IAuthEntity> & IAuthState,
    private readonly globalCommandsFactoriesProvider: IGlobalCommandsFactories
  ) { }

  @observableProgressNotification<boolean>({title: 'Account action', message: 'Log out succeed!'})
  logout(): Observable<boolean> {
    const logoutCommand = this.globalCommandsFactoriesProvider.logoutCommandFactory();
    return this.authStoreProvider.logout(logoutCommand);
  }

}
