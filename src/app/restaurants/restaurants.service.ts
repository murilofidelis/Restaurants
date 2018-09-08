import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { MEAT_API } from '../app.api'
import { ErroHandler } from './../app-error-handler';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  buscarRestaurantes(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`, { params: { q: search } })
      .map(Response => Response.json())
      .catch(ErroHandler.handleError);
  }

  buscarRestaurantePorId(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(Response => Response.json())
      .catch(ErroHandler.handleError);
  }
  buscarReviewsRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(Response => Response.json())
      .catch(ErroHandler.handleError);
  }

  buscarMenuRestaurante(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(Response => Response.json())
      .catch(ErroHandler.handleError);
  }
}
