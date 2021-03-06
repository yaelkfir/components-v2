import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import 'rxjs/add/operator/map';
// import { NotSelectedComponent } from './not-selected/not-selected.component';

import {AppComponent} from './app-component/app.component';
import {NavComponent} from './routing/nav/nav.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {RouterModule} from '@angular/router';
import {MasterTableComponent} from './masters/master-table/master-table.component';
import {Api} from 'app/service/api.service';
import {TableComponent} from './common/table-v1/table.component';
import {TableDataComponent} from './common/table-v1/table-cell/table-data.component';
import {MasterTableService} from './masters/master-table/master-table.service';
import {MasterOfTwoInputsModule} from './master-of-two-inputs/master-of-two-inputs.module';
import {MasterOfGetModule} from './master-of-get/master-of-get.module';
import {MasterOfFormModule} from './master-of-form/master-of-form.module';
import { MasterOfMovingListComponent } from './master-of-moving-list/master-of-moving-list.component';
import {MasterOfMovingListModule} from "./master-of-moving-list/master-of-moving-list.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MasterTableComponent,
    TableComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MasterOfTwoInputsModule,
    MasterOfGetModule,
    MasterOfFormModule,
    MasterOfMovingListModule
  ],
  providers: [
    Api,
    MasterTableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
