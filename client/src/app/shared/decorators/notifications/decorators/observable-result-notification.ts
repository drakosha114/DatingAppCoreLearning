import {Observable, throwError} from "rxjs";
import {INotificationParams} from "../interfaces";
import {ServicesModule} from "../../../../services/services.module";
import {NOTIFICATIONS_SERVICE_TOKEN} from "../../../../services/notifications";
import {DEFAULT_PROGRESS_NOTIFICATION_PARAMS} from "../constants";
import {tap} from "rxjs/operators";

export function observableResultNotification<T>(
  notificationProperties?: INotificationParams,
): (target: any, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => Observable<T>>) => TypedPropertyDescriptor<(...args: any[]) => Observable<T>> {

  const toasterService = ServicesModule.injector.get(NOTIFICATIONS_SERVICE_TOKEN);
  const messageProperties = {...DEFAULT_PROGRESS_NOTIFICATION_PARAMS, ...(notificationProperties || {})};
  return function (target: any, key: string,  descriptor: TypedPropertyDescriptor<(...args: any[]) => Observable<T>>) {

    const oldDescriptorValue = descriptor.value ? descriptor.value : () => throwError('Incorrect descriptor value');

    descriptor.value = function (...args: any[]): Observable<T> {

      return oldDescriptorValue.apply(this, args).pipe(
        tap( _ => toasterService?.success(messageProperties.message, messageProperties.title))
      )
    }

    return descriptor;
  }
}
