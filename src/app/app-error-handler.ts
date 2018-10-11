import { LoginService } from './security/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

import 'rxjs/add/observable/throw';
import { NotificationService } from './shared/messages/notification.service';

@Injectable()
export class ApplicationErroHandler extends ErrorHandler {

  constructor(
    private ns: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  handleError(erroResponse: HttpErrorResponse | any) {

    if (erroResponse instanceof HttpErrorResponse) {

      const message = erroResponse.error.message;

      this.zone.run(() => {
        switch (erroResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;
          case 403:
            this.ns.notify(message || 'Não autorizado.')
            break;
          case 404:
            this.ns.notify(message || 'Recurso não encontrado.')
            break;
        }
      });

    }

    super.handleError(erroResponse);
  }

}
