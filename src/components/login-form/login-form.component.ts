import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.scss']
})

export class LoginFormComponent {

    pas: string = null;

    @Output() isShowLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    login() {
        
    }

    cancel() {
        this.isShowLogin.next(false);
    }

}

