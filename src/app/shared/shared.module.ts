import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ErrorMessageComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
    exports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}
