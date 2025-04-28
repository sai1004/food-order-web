import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-signing-page',
    templateUrl: './signing-page.component.html',
    styleUrls: ['./signing-page.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
})
export class SigningPageComponent {
    toggleDarkMode(): void {
        document.body.classList.toggle('dark-theme');
    }
}
