import { LoginService } from './login/login.service';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) { }

  checkAutencation(path: string) {
    const loggedin = this.loginService.isLoggedIn();
    if (!loggedin) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedin;
  }

  canLoad(route: Route): boolean {
    return this.checkAutencation(route.path);
  }

  canActivate(activatedRouter: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAutencation(activatedRouter.routeConfig.path);
  }

}
