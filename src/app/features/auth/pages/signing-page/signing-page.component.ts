import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiginFormComponent } from '../../components/sigin-form/sigin-form.component';
import { AuthUser } from '../../models/authUser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-signing-page',
    templateUrl: './signing-page.component.html',
    styleUrls: ['./signing-page.component.scss'],
    standalone: true,
    imports: [CommonModule, SiginFormComponent, SharedModule],
})
export class SigningPageComponent implements OnInit {
    authForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    ) {
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
            const authUser: AuthUser = this.authForm.value;
            console.log('Form Submitted:', authUser);
            this.authService.login('token', { id: String(Date.now()), name: 'SAI', email: authUser.email });
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard/dashboard';
            this.router.navigateByUrl(returnUrl);
        } else {
            console.log('Form Invalid');
            this.authForm.markAllAsTouched();
        }
    }
}
