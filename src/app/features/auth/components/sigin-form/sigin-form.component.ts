import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-sigin-form',
    templateUrl: './sigin-form.component.html',
    styleUrls: ['./sigin-form.component.scss'],
    standalone: true,
    imports: [SharedModule],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class SiginFormComponent implements OnInit {
    hide: boolean = true;

    get email() {
        return this.formGroup?.control.get('email');
    }

    get password() {
        return this.formGroup?.control.get('password');
    }

    constructor(private formGroup: FormGroupDirective) {}

    ngOnInit(): void {}
}
