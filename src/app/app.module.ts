import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MainMenuComponent, DishItemComponent } from '../components/index';

import { DataService, ProviderService } from '../service/index';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DishItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
