import {ICommand} from "./i-command";
import {Observable} from "rxjs";

export interface IExecutableCommand<T> extends ICommand {
  execute(...args: any[]): Observable<T>;
}
