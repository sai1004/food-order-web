import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const AuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.hasToken()) {
        return true;
    }

    // Redirect to login with returnUrl
    return router.createUrlTree(['/auth/signin'], {
        queryParams: { returnUrl: state.url },
    });
};
