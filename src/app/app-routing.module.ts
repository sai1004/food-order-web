// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('./features/dashboard/pages/dashbo').then(m => m.CustomerModule)
    // },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
