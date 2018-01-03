import { Injectable } from '@angular/core';

import { MenuItem, DishItem } from './index';

@Injectable()

export class DataService {

    private menuItems: MenuItem[] = [
        { 
            id: 0,
            name: 'First dish'
        },
        { 
            id: 1,
            name: 'Second dish'
        },
        { 
            id: 2,
            name: 'Desserts'
        }
    ];

    private dishItems: DishItem[] = [
        {
            id: 0,
            name: 'Soup',
            picture: 'http://picture',
            descr: 'hot, fresh, delicious soup with chicken'
        },
        {
            id: 1,
            name: 'Soup with mushrooms',
            picture: 'http://picture',
            descr: 'hot, fresh, delicious soup with mushrooms'
        },
        {
            id: 2,
            name: 'Borsch',
            picture: 'http://picture',
            descr: 'hot, fresh, delicious red borsch with chicken'
        },
        {
            id: 3,
            name: 'Mash with meatball',
            picture: 'http://picture',
            descr: 'hot, fresh, delicious mash with meatball'
        },
        {
            id: 4,
            name: 'Mash with mushrooms',
            picture: 'http://picture',
            descr: 'hot, fresh, delicious mash with mushrooms'
        },
        {
            id: 5,
            name: 'Rice with steak',
            picture: 'http://picture',
            descr: 'hot, delicious steak with great garnish'
        },
        {
            id: 6,
            name: 'Choco pie',
            picture: 'http://picture',
            descr: 'delicious choco pie'
        },
        {
            id: 7,
            name: 'Chesse cake',
            picture: 'http://picture',
            descr: 'delicious cheese cake'
        },
        {
            id: 8,
            name: 'Tiramisu',
            picture: 'http://picture',
            descr: 'delicious tiramisu'
        },
    ];

    getMenuItems(): MenuItem[]{
        // http GET method will be here
        return this.menuItems;
    }

    getDishesList(id: number) {
        // http GET method will be here
        let result: DishItem[] = [];
        for (let i=id*3; i< (id*3 + 3); i++){
            result.push(this.dishItems[i]);
        }
        return result;
    }

}