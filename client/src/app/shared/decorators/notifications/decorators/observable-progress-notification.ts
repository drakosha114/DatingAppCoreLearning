import {Observable, throwError} from "rxjs";
import {INotificationParams} from "../interfaces";
import {ServicesModule} from "../../../../services/services.module";
import {NOTIFICATIONS_SERVICE_TOKEN} from "../../../../services/notifications";
import {DEFAULT_ERROR_NOTIFICATION_PARAMS, DEFAULT_PROGRESS_NOTIFICATION_PARAMS} from "../constants";
import {catchError, tap} from "rxjs/operators";

export function observableProgressNotification<T>(
  progressNotificationProperties?: INotificationParams,
  errorNotificationProperties?: INotificationParams
): (target: any, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => Observable<T>>) => TypedPropertyDescriptor<(...args: any[]) => Observable<T>> {

  const toasterService = ServicesModule.injector.get(NOTIFICATIONS_SERVICE_TOKEN);
  const errorMessageProperties = {...DEFAULT_ERROR_NOTIFICATION_PARAMS, ...(errorNotificationProperties || {})};
  const resultMessageProperties = {...DEFAULT_PROGRESS_NOTIFICATION_PARAMS, ...(progressNotificationProperties || {})};

  return function (target: any, key: string,  descriptor: TypedPropertyDescriptor<(...args: any[]) => Observable<T>>) {

    const oldDescriptorValue = descriptor.value ? descriptor.value : () => throwError('Incorrect descriptor value');

    descriptor.value = function (...args: any[]): Observable<T> {
      return oldDescriptorValue.apply(this, args).pipe(
        tap(_ => toasterService?.success(resultMessageProperties.message, resultMessageProperties.title)),
        catchError((err) => {
          toasterService?.error(errorMessageProperties.message, errorMessageProperties.title);
          return throwError(err);
        })
      )
    }

    return descriptor;
  }
}
