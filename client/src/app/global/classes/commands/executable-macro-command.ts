import {IExecutableCommand} from "../../interfaces";
import {Observable, Subject} from "rxjs";

export abstract class ExecutableMacroCommand<T> implements IExecutableCommand<T>{

  protected sbj$: Subject<any> = new Subject<any>();
  protected executedCommands: IExecutableCommand<any>[] = [];

  execute(...args: any[]): Observable<T> {
    return this.runCommands(args);
  }

  reset(): void {
    this.sbj$.next(true);
    this.sbj$.complete();
    this.executedCommands.forEach(cmd => {
      cmd.reset();
    });
  }

  protected abstract runCommands(...args: any[]): Observable<T>;
}
