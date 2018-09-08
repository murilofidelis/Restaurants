import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErroHandler {

  static handleError(erro: Response | any) {

    let errorMessage: string;

    if (erro instanceof HttpErrorResponse) {
      const body = erro.error;
      errorMessage = `Erro ${erro.status} ao acessar a URL ${erro.url} - ${erro.statusText || ''} ${body}`;
    } else {
      errorMessage = erro.message ? erro.message : erro.toString();
    }

    console.log(errorMessage);
    return Observable.throw(errorMessage);

  }

}
