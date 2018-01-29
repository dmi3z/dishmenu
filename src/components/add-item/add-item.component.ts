import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuItem, DataService } from '../../service/index';

@Component({
    moduleId: module.id,
    selector: 'add-item',
    templateUrl: 'add-item.component.html',
    styleUrls: ['add-item.component.scss']
})

export class AddItemComponent {

    // @Output() isShowLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

    items: MenuItem[] = [];

    pictures: Object[] = [
        { name: 'Soup', path: 'assets/pict/soup.jpg' },
        { name: 'Second dish', path: 'assets/pict/mash_meat.jpg' },
        { name: 'Dessert', path: 'assets/pict/choco_pie.jpg' },
        { name: 'Juice', path: 'assets/pict/orange_juice.jpg'}
    ];

    picture: Object;

    selectPicture: any;
    selectCategory: MenuItem = {
        id: 0,
        name: 'First dish'
    };

    @Output() isAddForm: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private dataService: DataService) {

        this.selectPicture = this.pictures[0];

        this.dataService.getMenuItems().subscribe(data => {
            this.items = data;
            this.selectCategory = data[0];
        });
    }

    add() {
       this.isAddForm.next(false);
    }


}

