import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiginFormComponent } from '../../components/sigin-form/sigin-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthForm, SigninResponse } from '../../models/auth';

@Component({
    selector: 'app-signing-page',
    templateUrl: './signing-page.component.html',
    styleUrls: ['./signing-page.component.scss'],
    standalone: true,
    imports: [CommonModule, SiginFormComponent, SharedModule],
})
export class SigningPageComponent implements OnInit, OnDestroy {
    authForm: FormGroup;
    destory$ = new Subject();

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
            const authForm: AuthForm = this.authForm.value;
            this.authService
                .signIn(authForm)
                .pipe(takeUntil(this.destory$))
                .subscribe({
                    next: (response: SigninResponse) => {
                        this.authService.login(response.access_token, response.identity);
                        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard/dashboard';
                        this.router.navigateByUrl(returnUrl);
                    },
                    error: (err: Error) => {
                        console.error('Login failed:', err);
                        // Show error to user
                    },
                });
        } else {
            this.authForm.markAllAsTouched();
        }
    }

    ngOnDestroy(): void {
        this.destory$.next('');
        this.destory$.complete();
    }
}
