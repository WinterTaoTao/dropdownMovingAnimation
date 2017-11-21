import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniDropdownTagsComponent } from './ani-dropdown-tags.component';

describe('AniDropdownTagsComponent', () => {
  let component: AniDropdownTagsComponent;
  let fixture: ComponentFixture<AniDropdownTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniDropdownTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniDropdownTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
