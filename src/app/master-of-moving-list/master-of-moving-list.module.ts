import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterOfMovingListComponent} from './master-of-moving-list.component';
import {PosterComponent} from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MasterOfMovingListComponent, PosterComponent],
  exports: [MasterOfMovingListComponent]
})
export class MasterOfMovingListModule { }
