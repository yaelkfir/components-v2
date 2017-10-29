import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonTextInputComponent} from './common-text-input/common-text-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonTextAreaComponent} from "./common-text-area/common-text-area.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CommonTextInputComponent, CommonTextAreaComponent],
  exports: [CommonTextInputComponent, CommonTextAreaComponent]
})
export class TextInputModule { }
