import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }
    decreasyQty(item: CartItem) {
        this.cartService.decreasyQty(item)
    }
    remove(item: CartItem) {
        this.cartService.removerItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }
}