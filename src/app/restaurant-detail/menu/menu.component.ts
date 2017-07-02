import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restauranteService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService.buscarMenuRestaurante(this.route.parent.snapshot.params['id'])
  }
  adicionarItemAoCarrinho(item: MenuItem) {
    console.log(item)
  }
}
