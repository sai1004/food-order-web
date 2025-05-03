import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'food-order-web';
    isSessionUser: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
