import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('exibiritemMenu', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  // representa 1 item do menu
  @Input() itemDoMenu: MenuItem;
  // evento de adicionar
  @Output() add = new EventEmitter();

  menuItemEstado = 'ready';

  constructor() { }

  ngOnInit() {
  }
  // método para adicionar menu clicado ao evento
  adicionar() {
    this.add.emit(this.itemDoMenu);
  }

}
