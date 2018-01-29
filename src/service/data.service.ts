import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { MenuItem, DishItem } from './index';

@Injectable()

export class DataService {

    private url: string = 'http://dmi3z.somee.com/api/';

    constructor(public http: Http) {}

    getMenuItems(): Observable<MenuItem[]> {
        const action: string = 'category';
        return this.http.get(this.url.concat(action)).map((res: Response) => {
            let data = res.json();
            let menuItems: MenuItem[] = [];
            data = JSON.parse(data);
            for(let item of data) {
                menuItems.push({
                    id: item.id,
                    name: item.name
                });
            }
            return menuItems;
        })
    }

    getDishesList(id: number): Observable<DishItem[]> {
        const action: string = 'dish';
        return this.http.get(this.url.concat(action, '/', id.toString())).map((res: Response) => {
            let data = JSON.parse(res.json());
            let dishItems: DishItem[] = [];
            for(let dish of data) {
                dishItems.push({
                    id: dish.id,
                    name: dish.name,
                    descr: dish.descr,
                    picture: dish.pict
                })
            }
            return dishItems;
        })
    }

}