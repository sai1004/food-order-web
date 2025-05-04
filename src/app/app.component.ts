import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Food Order App';
    isSessionUser: boolean = false;
    menuList: any[] = [
        { name: 'Dashboard', icon: 'dashboard' },
        { name: 'Products', icon: 'cake' },
        { name: 'Orders', icon: 'reorder' },
    ];
    events: string[] = [];
    opened: boolean = true;

    constructor() {}

    ngOnInit(): void {}
}
