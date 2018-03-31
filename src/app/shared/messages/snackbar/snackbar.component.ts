import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
  trigger('snack-visibility',[
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

  constructor() { }

  ngOnInit() {
  }

  teste(){
  	this.snackVisibity = this.snackVisibity === 'hidden' ? 'visibile' : 'hidden'
  }

}
