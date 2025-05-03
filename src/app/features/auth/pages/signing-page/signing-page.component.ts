import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiginFormComponent } from '../../components/sigin-form/sigin-form.component';

@Component({
    selector: 'app-signing-page',
    templateUrl: './signing-page.component.html',
    styleUrls: ['./signing-page.component.scss'],
    standalone: true,
    imports: [CommonModule, SiginFormComponent, SharedModule],
})
export class SigningPageComponent implements OnInit {
    authForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.authForm = this.createAuthForm();
    }

    ngOnInit(): void {}

    createAuthForm() {
        return this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit() {
        if (this.authForm.valid) {
            console.log('Form Submitted:', this.authForm.value);
            localStorage.setItem('auth', JSON.stringify(this.authForm.value));
        } else {
            console.log('Form Invalid');
            this.authForm.markAllAsTouched();
        }
    }
}
