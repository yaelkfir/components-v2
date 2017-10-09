import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterGetComponent} from './master-get-component/master-get-component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MasterGetComponent],
  exports: [MasterGetComponent]

})

export class MasterOfGetModule {}
