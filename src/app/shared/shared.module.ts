import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedin.guard';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SnackbarComponent
  ]
})
export class SharedModule {

  /**
   * com essa configuração, não precisa mais do CoreModule.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService, LoginService,
        LoggedInGuard]
    };

  }
}
