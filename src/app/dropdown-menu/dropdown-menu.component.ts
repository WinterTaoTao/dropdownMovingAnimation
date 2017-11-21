import { Component, OnInit } from '@angular/core';
import {DropdownItem} from '../dropdown-item';
import {PriceDropdownItems} from './price-items';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.less']
})
export class DropdownMenuComponent implements OnInit {
  dropdownItems: DropdownItem[];
  width: string;
  constructor() { }

  ngOnInit() {
    this.dropdownItems = PriceDropdownItems;
    this.width = 'white';
  }

}
