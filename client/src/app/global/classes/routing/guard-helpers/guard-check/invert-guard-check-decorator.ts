import {GuardCheckDecorator} from "./guard-check-decorator";
import {IGuardCheck} from "../../../../interfaces";

export class InvertGuardCheckDecorator extends GuardCheckDecorator{
  constructor(decoratedGuardCheckService: IGuardCheck) {
    super(decoratedGuardCheckService);
  }

  protected valueTransformer(value: boolean): boolean {
    return !value;
  }
}
