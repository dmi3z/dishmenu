import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService, MenuItem, DishItem, ProviderService } from '../../service/index';

@Component({
    moduleId: module.id,
    selector: 'main-menu',
    templateUrl: 'main-menu.component.html',
    styleUrls: ['main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

    @ViewChild('list') list;    
    isMenuShow: boolean = false;
    menuItems: MenuItem[] = [];

    constructor(public dataService: DataService, public providerService: ProviderService) {
    }

    ngOnInit() {
        this.menuItems = this.dataService.getMenuItems();
    }

    toggleMenu() {
        this.isMenuShow = !this.isMenuShow;
        if(this.isMenuShow) {
            this.list.nativeElement.style.height = '15rem';
        } else {
            this.list.nativeElement.style.height = '1.5rem';
        }        
    }

    selectDish(id: number) {
        let result: DishItem[] = this.dataService.getDishesList(id);
        this.providerService.sendItems(result);
        this.toggleMenu();
    }

}