import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ani-dropdown-tags',
  templateUrl: './ani-dropdown-tags.component.html',
  styleUrls: ['./ani-dropdown-tags.component.less']
})
export class AniDropdownTagsComponent implements OnInit {
  aniDropdownTags: string[];
  constructor() { }

  ngOnInit() {
    this.aniDropdownTags = ['Products', 'Pricing', 'Supports'];
  }

}
