import { Injectable } from '@angular/core';

import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

import { NotificationService } from './../../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {

  constructor(private notificationService: NotificationService) { }

  items: CartItem[] = [];

  limpar() {
    this.items = [];
  }

  adicionarItens(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Novo item adicionado: ${item.name}`);
  }

  removerItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Item: ${item.menuItem.name} removido`);
  }

  total(): number {
    return this.items
      .map(item => item.calcularValor())
      .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItem) {
    item.quantidade = item.quantidade + 1;
  }
  decreasyQty(item: CartItem) {
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0) {
      this.removerItem(item);
    }
  }

}
