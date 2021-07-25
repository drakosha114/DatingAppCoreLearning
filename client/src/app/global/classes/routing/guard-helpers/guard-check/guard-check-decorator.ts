import {ValueTransformerClass} from "../../../helpers";
import {IGuardCheck, IGuardCheckParams} from "../../../../interfaces";
import {Observable} from "rxjs";

export abstract class GuardCheckDecorator  extends ValueTransformerClass<boolean, boolean> implements IGuardCheck{
  protected constructor(private decoratedGuardCheckService: IGuardCheck) {
    super();
  }

  check(params: IGuardCheckParams): Observable<boolean> | Promise<boolean> | boolean {
    const res = this.decoratedGuardCheckService.check(params);
    return this.transform(res);
  }

}
