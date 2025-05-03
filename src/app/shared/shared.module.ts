import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ErrorMessageComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
