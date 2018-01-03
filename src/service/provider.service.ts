import { Injectable, EventEmitter, Output } from '@angular/core';

import { DishItem } from '../service/index';

@Injectable()

export class ProviderService {

    @Output() change: EventEmitter<DishItem[]> = new EventEmitter<DishItem[]>();

    sendItems(items: DishItem[]) {
        this.change.next(items);
    }

}