import {Observable} from "rxjs";

export interface IAppFacade {
  readonly userProfile: Observable<any>;

  logout(onSuccessCallback: () => void): void;
}
