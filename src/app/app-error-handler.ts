import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErroHandler {
    static handleError(erro: Response | any) {

        let errorMessage: string
        if (erro instanceof Response) {
            errorMessage = `Erro ${erro.status} ao acessar a URL ${erro.url} - ${erro.statusText}`
        } else {
            errorMessage = erro.toString()
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)

    }

}