import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]
  @Output() incrementar = new EventEmitter<CartItem>()
  @Output() decrementar = new EventEmitter<CartItem>()
  @Output() remover = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  incrementarQuantidade(item: CartItem) {
    this.incrementar.emit(item)
  }
  decrementarQuantidade(item: CartItem) {
    this.decrementar.emit(item)
  }
  removeQuantidade(item: CartItem) {
    this.remover.emit(item)
  }
}
