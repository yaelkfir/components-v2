import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullNameInputsComponent} from './full-name-inputs/two-inputs.component';
import {TextInputModule} from '../common/text-input/text-input.module';

@NgModule({
  imports: [
    CommonModule,
    TextInputModule
  ],
  declarations: [FullNameInputsComponent],
  exports: [FullNameInputsComponent]
})
export class MasterOfTwoInputsModule { }
