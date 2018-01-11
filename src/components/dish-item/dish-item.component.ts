import { Component, OnInit, Input } from '@angular/core';

import { DishItem } from '../../service/index';

@Component({
    moduleId: module.id,
    selector: 'dish-item',
    templateUrl: 'dish-item.component.html',
    styleUrls: ['dish-item.component.scss']
})

export class DishItemComponent {

    @Input() item: DishItem;
}