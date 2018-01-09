import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    HttpModule
  ],
  providers: [DataService, ProviderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
