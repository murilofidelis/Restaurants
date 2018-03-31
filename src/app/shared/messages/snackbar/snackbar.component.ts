import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotificationService } from './../notification.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visibile', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visibile', animate('500ms 0s ease-in')),
      transition('visibile => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  menssagen: string = 'Compras';
  snackVisibity = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
      .do(message => {
        this.menssagen = message;
        this.snackVisibity = 'visibile';
      }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.snackVisibity = 'hidden');
  }

  teste() {
    this.snackVisibity = this.snackVisibity === 'hidden' ? 'visibile' : 'hidden';
  }

}
