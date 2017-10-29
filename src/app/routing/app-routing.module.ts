import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavComponent} from './nav/nav.component';
import {MasterTableComponent} from "../masters/master-table/master-table.component";
import {FullNameInputsComponent} from "../master-of-two-inputs/full-name-inputs/two-inputs.component";
import {MasterGetComponent} from "../master-of-get/master-get-component/master-get-component";
import {MasterFormComponent} from "../master-of-form/master-form/master-form.component";
import {MasterOfMovingListComponent} from "../master-of-moving-list/master-of-moving-list.component";

const appRoutes: Routes = [
  // {
  //   path: 'form',
  //   component: MyFormComponent,
  // },
  // {
  //   path: 'table',
  //   component: TableComponent,
  // },
  // {
  //   path: 'tablev2',
  //   component: TableTwoComponent,
  // },
  {
    path: 'home',
    component: NavComponent,
  },
  {
    path: 'master-of-inputs',
    component: FullNameInputsComponent,
  },
  {
    path: 'master-of-get',
    component: MasterGetComponent,
  },
  {
    path: 'master-form',
    component: MasterFormComponent,
  },
  {
    path: 'moving-list',
    component: MasterOfMovingListComponent,
  },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {
      //   enableTracing: true, // <-- debugging purposes only
      // }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
