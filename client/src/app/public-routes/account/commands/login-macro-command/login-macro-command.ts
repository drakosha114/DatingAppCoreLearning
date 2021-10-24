import {IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../../../../services/state/auth-state/interfaces/i-auth-entity";
import {Observable, Subject} from "rxjs";
import {ILoginPayload} from "../../../../services/interfaces";
import {switchMap, takeUntil} from "rxjs/operators";

export class LoginMacroCommand implements IExecutableCommand<IAuthEntity>{
  private sbj$ = new Subject();
  private executedCommands: IExecutableCommand<any>[] = [];

  constructor(
    private loginCommand: IExecutableCommand<IAuthEntity>,
    private addDataAuAccountStoreCommand: IExecutableCommand<IAuthEntity>) {
  }

  execute(loginPayload: ILoginPayload): Observable<IAuthEntity> {
    this.executedCommands.push(this.loginCommand);
    return this.loginCommand.execute(loginPayload).pipe(
      switchMap((account: IAuthEntity) => {
        this.executedCommands.push(this.addDataAuAccountStoreCommand);
        return this.addDataAuAccountStoreCommand.execute(account)
      }),
      takeUntil(this.sbj$),
    )
  }

  reset(): void {
    this.sbj$.next(true);
    this.sbj$.complete();
    for (const cmd of this.executedCommands) {
      cmd.execute();
    }
    this.resetCommand();


  }

  private resetCommand(): void {
    this.executedCommands = [];
    this.sbj$ = new Subject<any>();
  }
}
