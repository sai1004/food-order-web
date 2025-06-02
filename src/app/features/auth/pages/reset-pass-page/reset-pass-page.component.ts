import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-reset-pass-page',
    templateUrl: './reset-pass-page.component.html',
    styleUrls: ['./reset-pass-page.component.scss'],
    standalone: true,
    imports: [CommonModule, SharedModule],
})
export class ResetPassPageComponent implements OnInit {
    email: string = '';
    message: string = '';
    isShowEmail: boolean = true;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    navigateToReset() {
        // this.router.navigateByUrl("auth/reset-pass")
    }

    onSubmit() {
        console.log(this.email);
        this.authService.forgotPassword(this.email).subscribe((response: any) => {
            console.log(response);
            if (response?.status === 1) {
                this.message = response?.message;
                this.isShowEmail = false;
            }
        });
    }
}
