import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().subscribe(allRestaurants => this.restaurants = allRestaurants)
  }

}
