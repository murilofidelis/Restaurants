import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.limpar();
  }

  remover(item: any) {
    this.shoppingCartService.removerItem(item)
  }

  addItem(item: any) {
    this.shoppingCartService.adicionarItens(item)
  }
}
