import {ExecutableMacroCommand, IExecutableCommand} from "../../../../global";
import {IAuthEntity} from "../../../../services/state/auth-state/interfaces/i-auth-entity";
import {Observable} from "rxjs";
import {IRegisterPayload} from "../../../../services/interfaces";
import {switchMap, takeUntil} from "rxjs/operators";

export class RegisterMacroCommand extends ExecutableMacroCommand<IAuthEntity>{

  constructor(
    private loginCommand: IExecutableCommand<IAuthEntity>,
    private addDataToAccountStoreCommand: IExecutableCommand<IAuthEntity>
    ) {
    super();
  }
  
  protected runCommands(registerPayload: IRegisterPayload): Observable<IAuthEntity> {
    this.executedCommands.push(this.loginCommand);
    return this.loginCommand.execute(registerPayload).pipe(
      switchMap((resp:IAuthEntity) => {
        this.executedCommands.push(this.addDataToAccountStoreCommand);
        return this.addDataToAccountStoreCommand.execute(resp);
      }),
      takeUntil(this.sbj$),
    )
  }
}
