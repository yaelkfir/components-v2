import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterFormComponent} from './master-form/master-form.component';
import {FromCardComponent} from './from-card/from-card.component';
import {TextInputModule} from '../common/text-input/text-input.module';
import {CommonCardComponent} from './common-card/common-card.component';

@NgModule({
  imports: [
    CommonModule,
    TextInputModule
  ],
  declarations: [MasterFormComponent, CommonCardComponent, FromCardComponent],
  exports: [MasterFormComponent]
})
export class MasterOfFormModule { }

