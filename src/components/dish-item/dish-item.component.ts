import { Component, OnInit, Input } from '@angular/core';

import { DishItem } from '../../service/index';

@Component({
    moduleId: module.id,
    selector: 'dish-item',
    templateUrl: 'dish-item.component.html',
    styleUrls: ['dish-item.component.scss']
})

export class DishItemComponent implements OnInit {

    @Input() item: DishItem;

    picture: string = '';

    constructor() {
        
    }

    ngOnInit() {
        const assetPath = './assets/pict/';
        console.log(this.item);
        this.picture = assetPath.concat(this.item.picture);
        console.log(this.picture);
    }


}