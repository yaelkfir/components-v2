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
import {MasterTableComponent} from './costume-masters/master-table/master-table.component';
import {SearchService} from 'app/service/movie.service';
import {TableComponent} from './common/table-v1/table.component';
import {TableDataComponent} from './common/table-v1/table-cell/table-data.component';
import {MasterTableService} from './costume-masters/master-table/master-table.service';


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
  ],
  providers: [
    SearchService,
    MasterTableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
