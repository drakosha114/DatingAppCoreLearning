import {IAppFacade} from "../interfaces";
import {IAuthState} from "../../services/state/auth-state/interfaces/i-auth-state";
import {Observable} from "rxjs";
import {IGlobalCommandsFactories} from "../../services/commands";
import {IStoreBase} from "../../global";
import {IAuthEntity} from "../../services/state/auth-state/interfaces/i-auth-entity";
import {map} from "rxjs/operators";

export class AppFacadeService implements IAppFacade {

  readonly userProfile: Observable<any> = this.authStoreProvider.getState.pipe(
    map(state => state.data?.user)
  );

  constructor(
    private readonly authStoreProvider: IStoreBase<IAuthEntity> & IAuthState,
    private readonly globalCommandsFactoriesProvider: IGlobalCommandsFactories
  ) { }

  logout(onSuccessCallback: () => void) {
    const logoutCommand = this.globalCommandsFactoriesProvider.logoutCommandFactory();
    this.authStoreProvider.logout(logoutCommand).subscribe(() => {
      onSuccessCallback();
    });
  }

}
