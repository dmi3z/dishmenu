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
            picture: './assets/pict/soup.jpg',
            descr: 'hot, fresh, delicious soup with chicken'
        },
        {
            id: 1,
            name: 'Soup with mushrooms',
            picture: './assets/pict/soup_mush.jpg',
            descr: 'hot, fresh, delicious soup with mushrooms'
        },
        {
            id: 2,
            name: 'Borsch',
            picture: './assets/pict/borsch.jpg',
            descr: 'hot, fresh, delicious red borsch with chicken'
        },
        {
            id: 3,
            name: 'Mash with meatball',
            picture: './assets/pict/mash_mitb.jpg',
            descr: 'hot, fresh, delicious mash with meatball'
        },
        {
            id: 4,
            name: 'Mash with mushrooms',
            picture: './assets/pict/mash_mush.jpg',
            descr: 'hot, fresh, delicious mash with mushrooms'
        },
        {
            id: 5,
            name: 'Rice with steak',
            picture: './assets/pict/steak.jpg',
            descr: 'hot, delicious steak with great garnish'
        },
        {
            id: 6,
            name: 'Choco pie',
            picture: './assets/pict/choco_pie.jpg',
            descr: 'delicious choco pie'
        },
        {
            id: 7,
            name: 'Cheese cake',
            picture: './assets/pict/cheese_cake.jpg',
            descr: 'delicious cheese cake'
        },
        {
            id: 8,
            name: 'Tiramisu',
            picture: './assets/pict/tiramisu.jpg',
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