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
        this.dataService.getMenuItems().subscribe(res => this.menuItems = res,
        error => {
            alert('Server error. Can not get categoryes. Try later.');
        });
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
        this.dataService.getDishesList(id).subscribe(data => {
            this.providerService.sendItems(data);
            this.toggleMenu();
        }, error => {
            alert('Server error. Cannot get dishes list. Try later.')
        });
        
        
    }

}