import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ani-dropdown-tags',
  templateUrl: './ani-dropdown-tags.component.html',
  styleUrls: ['./ani-dropdown-tags.component.less']
})
export class AniDropdownTagsComponent implements OnInit {
  aniDropdownTags: string[];
  tagWidth: number;
  dropdownMenuMoveX: string;
  menuIndex: number;
  isDisplay: boolean;

  constructor() { }

  ngOnInit() {
    this.aniDropdownTags = ['Products', 'Pricing', 'Supports'];
    this.tagWidth = 110;

    this.isDisplay = false;
  }

  set_dropdown_menu(tag_index: number) {
    this.menuIndex = tag_index;
    this.dropdownMenuMoveX = tag_index * this.tagWidth + 'px';
  }

  set_tag_style() {
    return {
      'width': this.tagWidth + 'px'
    };
  }

  set_dropdown_menu_style() {
    return {
      'transform' : 'translateX(' + this.dropdownMenuMoveX + ')',
      'display' : this.isDisplay ? 'block' : 'none'
    };
  }

  change_display(isDisplay: boolean) {
    this.isDisplay = isDisplay;
  }
}
