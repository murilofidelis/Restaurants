import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from '../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  buscarRestaurantes(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().append('q', search);
    }

    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
  }

  buscarRestaurantePorId(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }
  buscarReviewsRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  buscarMenuRestaurante(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
