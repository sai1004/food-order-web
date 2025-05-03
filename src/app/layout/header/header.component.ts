import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Output()
    sideNavToggle: EventEmitter<any> = new EventEmitter();

    onClick() {
        this.sideNavToggle.emit(true);
    }
}
