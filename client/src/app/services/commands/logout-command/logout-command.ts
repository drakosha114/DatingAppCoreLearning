import {IExecutableCommand} from "../../../global";
import {Observable, of, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

export class LogoutCommand implements IExecutableCommand<boolean>{

  private sbj$ = new Subject();

  constructor(private readonly clearAccountStorageCommand: IExecutableCommand<boolean>) {
  }

  execute(): Observable<boolean>{
    return this.clearAccountStorageCommand.execute().pipe(takeUntil(this.sbj$));
  }

  reset(): void {
    this.sbj$.next(false);
    this.sbj$.complete();
    this.clearAccountStorageCommand.reset();
  }
}
