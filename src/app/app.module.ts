import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { ButtonComponent } from './shared/components/button/button.component';
import { CustomDirective } from './shared/directives/custom.directive';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        CustomPipe,
        ButtonComponent,
        CustomDirective,
        DashboardPageComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
