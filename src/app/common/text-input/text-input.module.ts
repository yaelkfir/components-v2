import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonTextInputComponent} from './common-text-input/common-text-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CommonTextInputComponent],
  exports: [CommonTextInputComponent]
})
export class TextInputModule { }
