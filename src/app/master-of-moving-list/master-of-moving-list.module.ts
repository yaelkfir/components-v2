import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterOfMovingListComponent} from './master-of-moving-list.component';
import {PosterComponent} from './poster/poster.component';
import {MovingListService} from "./moving-list.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MasterOfMovingListComponent, PosterComponent],
  exports: [MasterOfMovingListComponent],
  providers: [MovingListService]
})
export class MasterOfMovingListModule { }
