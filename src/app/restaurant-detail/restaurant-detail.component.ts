import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  restaurante: Restaurant

  ngOnInit() {

    this.restaurantsService.buscarRestaurantePorId(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurante = restaurant)
  }

}
