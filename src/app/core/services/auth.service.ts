import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role?: string;
    // Add more fields as needed
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly TOKEN_KEY = 'auth_token';
    private readonly USER_KEY = 'auth_user';

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
    public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

    constructor(private storage: StorageService, private router: Router) {}

    /** Save auth data after login */
    login(token: string, user: AuthUser): void {
        this.storage.set(this.TOKEN_KEY, token);
        this.storage.set(this.USER_KEY, user);
        this.isAuthenticatedSubject.next(true);
    }

    /** Clear session and redirect */
    logout(redirectUrl: string = '/auth/login'): void {
        this.storage.remove(this.TOKEN_KEY);
        this.storage.remove(this.USER_KEY);
        this.isAuthenticatedSubject.next(false);
        this.router.navigateByUrl(redirectUrl);
    }

    /** Returns current auth token */
    getToken(): string | null {
        return this.storage.get<string>(this.TOKEN_KEY);
    }

    /** Returns current user info */
    getUser(): AuthUser | null {
        return this.storage.get<AuthUser>(this.USER_KEY);
    }

    /** Returns whether a token exists */
    hasToken(): boolean {
        return this.storage.hasKey(this.TOKEN_KEY);
    }

    /** Utility: refresh user info */
    updateUser(user: Partial<AuthUser>): void {
        const current = this.getUser();
        if (current) {
            const updatedUser = { ...current, ...user };
            this.storage.set(this.USER_KEY, updatedUser);
        }
    }
}


// // Save token and user on login
// this.authService.login(response.token, response.user);

// // Get user
// const user = this.authService.getUser();

// // Check login status
// this.authService.isAuthenticated$.subscribe(isLoggedIn => {
//   console.log('Logged in:', isLoggedIn);
// });

// // Logout
// this.authService.logout();
