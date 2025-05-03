import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Food Order App';
    isSessionUser: boolean = false;
    menuList: any[] = ['Dashboard', 'Products', 'Orders'];
    events: string[] = [];
    opened: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
