import {Router, UrlTree} from "@angular/router";
import { IGuardCheckHandler, IGuardCheckParams } from "../../../../interfaces";
import { ValueTransformerClass } from '../../../helpers'
import {Observable} from "rxjs";

export class GuardCheckHandlerClass extends ValueTransformerClass<boolean, boolean | UrlTree> implements IGuardCheckHandler{
  constructor(protected router: Router, protected checkFailedRedirectUrl: string) {
    super();
  }

  checkHandler(checkResult: Observable<boolean> | Promise<boolean> | boolean, params: IGuardCheckParams): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.transform(checkResult);
  }

  protected valueTransformer(value: boolean): boolean | UrlTree {
   console.log(value);
    return value || this.router.parseUrl(this.checkFailedRedirectUrl);
  }

}
