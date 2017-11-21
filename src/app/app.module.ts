import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AniDropdownTagsComponent } from './ani-dropdown-tags/ani-dropdown-tags.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AniDropdownTagsComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
