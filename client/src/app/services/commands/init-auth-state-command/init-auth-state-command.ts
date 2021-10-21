import {IExecutableCommand} from "../../../global";
import {IAuthEntity} from "../../state/auth-state/interfaces/i-auth-entity";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

export class InitAuthStateCommand implements IExecutableCommand<IAuthEntity | null>{

  private sbj$ = new Subject();

  constructor(private readonly getDataFromAccountStorageCommand: IExecutableCommand<IAuthEntity | null>) {
  }

  execute(): Observable<IAuthEntity | null> {
    return this.getDataFromAccountStorageCommand.execute().pipe(takeUntil(this.sbj$));
  }

  reset(): void {
    this.sbj$.next(true);
    this.sbj$.complete();
    this.getDataFromAccountStorageCommand.reset();
  }
}
