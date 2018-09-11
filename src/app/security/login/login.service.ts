import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { MEAT_API } from './../../app.api';
import { User } from './user.model';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class LoginService {

  user: User;
  ultimaUrl: string;


  constructor(private http: HttpClient, private router: Router) {

    // monitora as urls
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        console.log(e.url);
        this.ultimaUrl = e.url;
      });
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
      .do(user => this.user = user);
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  // Se não for passado nenhum parametro então pega a ultima url.
  handleLogin(path: string = this.ultimaUrl) {
    this.router.navigate(['/login', btoa(path)]); // base64 na URL
  }

  logout() {
    this.user = undefined;
  }

}
