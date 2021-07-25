import {IExecutableCommand, IStoreService} from "../../../global";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {Observable, of} from "rxjs";

export class InitAuthStateCommand implements IExecutableCommand<IAuthEntity | null>{
  constructor(private storage: IStoreService) {
  }

  execute(): Observable<IAuthEntity | null> {
    const token = this.storage.getItem('token');
    const user = this.storage.getItem('user');
    return token && user ? of({token, user: JSON.parse(user)}) : of(null);
  }

  reset(): void {
  }
}
