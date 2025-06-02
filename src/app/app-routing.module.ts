import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth/signin',
        loadComponent: () =>
            import('./features/auth/pages/signing-page/signing-page.component').then((c) => c.SigningPageComponent),
    },
    {
        path: 'auth/signup',
        loadComponent: () =>
            import('./features/auth/pages/signup-page/signup-page.component').then((c) => c.SignupPageComponent),
    },
    {
        path: 'auth/reset-pass',
        loadComponent: () =>
            import('./features/auth/pages/reset-pass-page/reset-pass-page.component').then((c) => c.ResetPassPageComponent),
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'food',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/food-menu/food-menu.module').then((m) => m.FoodMenuModule),
    },
    {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/orders/orders.module').then((m) => m.OrdersModule),
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
