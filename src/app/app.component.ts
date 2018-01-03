import { Component } from '@angular/core';

import { DishItem, ProviderService } from '../service/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  items: DishItem[] = [];

  constructor(public providerService: ProviderService) {
    this.providerService.change.subscribe(data => {
      this.items = data;
    })
  }
}
