import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
})
export class SignupPageComponent {}
