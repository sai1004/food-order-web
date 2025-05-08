import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Food Order App';
    isSessionUser: boolean = false;
    opened: boolean = true;
    menuList: any[] = [
        { name: 'Dashboard', icon: 'dashboard', route: '/dashboard/dashboard' },
        { name: 'Food Menu', icon: 'cake', route: '/products/' },
        { name: 'Orders', icon: 'reorder', route: '/orders/list' },
    ];
    destroy$ = new Subject();

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isAuthenticated();
    }

    isAuthenticated() {
        this.authService.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe((isLoggedIn: boolean) => {
            this.isSessionUser = isLoggedIn;
            this.opened = isLoggedIn;
        });
    }

    onSignOut() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.destroy$.next('');
        this.destroy$.complete();
    }
}
