import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { MEAT_API } from '../app.api'
import { ErroHandler } from './../app-error-handler';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    buscarRestaurantes(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(Response => Response.json())
            .catch(ErroHandler.handleError)
    }

    buscarRestaurantePorId(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(Response => Response.json())
            .catch(ErroHandler.handleError)
    }
    buscarReviewsRestaurante(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(Response => Response.json())
            .catch(ErroHandler.handleError)
    }


}   