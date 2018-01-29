import { Component } from '@angular/core';

import { DishItem, ProviderService } from '../service/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showLoginForm: boolean = false;
  showAddForm: boolean = false;

  status: number = 0;

  items: DishItem[] = [];

  constructor(public providerService: ProviderService) {
    this.providerService.change.subscribe(data => {
      this.items = data;
    })
  }

  onShowLogin(show: boolean) {
    this.showLoginForm = show;
  }

  onAddForm(show: boolean) {
    this.showAddForm = show;
  }

}
