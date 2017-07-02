import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  // representa 1 item do menu
  @Input() itemDoMenu: MenuItem
  // evento de adicionar
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  // método para adicionar menu clicado ao evento
  adicionar() {
    this.add.emit(this.itemDoMenu)
  }

}
