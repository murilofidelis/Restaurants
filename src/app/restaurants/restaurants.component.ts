
import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/from';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('togglesearch', [
      state('hidden', style({
        opacity: 0, 'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  searchBarState = 'hidden';

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(1000) // espera 1s para realizar a pesquisa
      .distinctUntilChanged() // so realiza a pesquisa se o texto digitado for difrente do ultimo texto digitado
      .do(searchTerm => console.log(searchTerm)) // apenas imprime
      .switchMap(searchTerm => this.restaurantsService.buscarRestaurantes(searchTerm)
        .catch(error => Observable.from([]))) // tratamento para não quebrar o valueChanges quando houver algum erro.
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.buscarRestaurantes().subscribe(allRestaurants => this.restaurants = allRestaurants);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
