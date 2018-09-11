
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from 'app/order/order.model';
import { LoginService } from './../security/login/login.service';
import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

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

  checkOrder(order: Order): Observable<string> {
    let headers = new HttpHeaders();

    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
    }
    return this.http.post<Order>(`${MEAT_API}/orders`, order, { headers: headers })
      .map(result => result.id);
  }

  clear() {
    this.cartService.limpar()
  }
}
