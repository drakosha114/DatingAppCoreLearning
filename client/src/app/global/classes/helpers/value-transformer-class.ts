import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export abstract class ValueTransformerClass<I,O> {
  protected transform(value: I | Observable<I> | Promise<I>): O | Observable<O> | Promise<O> {

    if(value instanceof Observable) {
      return value.pipe(
        map(value => this.valueTransformer(value))
      );
    } else if (value instanceof Promise) {
      return new Promise((resolve, reject) => {
        value.then(value => resolve(this.valueTransformer(value))).catch((e) => reject(e));
      })
    } else {
      return this.valueTransformer(value as I);
    }
  }

  protected abstract valueTransformer(value: I): O;

}
