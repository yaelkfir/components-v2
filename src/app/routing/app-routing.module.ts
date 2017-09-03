import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavComponent} from './nav/nav.component';
import {MasterTableComponent} from "../costume-masters/master-table/master-table.component";

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
    path: 'mTable',
    component: MasterTableComponent,
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
