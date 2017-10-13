import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterGetComponent} from './master-get-component/master-get-component';
import {BgImgDirective} from '../bg-img.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MasterGetComponent, BgImgDirective],
  exports: [MasterGetComponent, BgImgDirective]
})

export class MasterOfGetModule {}
