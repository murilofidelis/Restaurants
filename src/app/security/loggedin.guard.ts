import { LoginService } from './login/login.service';
import { CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private loginService: LoginService) { }

  canLoad(route: Route): boolean {
    const loggedin = this.loginService.isLoggedIn();
    if (!loggedin) {
      this.loginService.handleLogin(`/${route.path}`);
    }
    return loggedin;
  }
}
