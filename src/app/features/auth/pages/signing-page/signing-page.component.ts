import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiginFormComponent } from '../../components/sigin-form/sigin-form.component';
import { Auth } from '../../models/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signing-page',
    templateUrl: './signing-page.component.html',
    styleUrls: ['./signing-page.component.scss'],
    standalone: true,
    imports: [CommonModule, SiginFormComponent, SharedModule],
})
export class SigningPageComponent implements OnInit {
    authForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
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
            const auth: Auth = this.authForm.value;
            console.log('Form Submitted:', auth);
            localStorage.setItem('auth', JSON.stringify(auth));
            this.router.navigateByUrl('/dashboard/dashboard');
        } else {
            console.log('Form Invalid');
            this.authForm.markAllAsTouched();
        }
    }
}
