import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import {MultiSelectionComponent} from '../common/multi-selection/multi-selection.component';
import {NavComponent} from './nav/nav.component';
import {MasterTableComponent} from "../costume-masters/master-table/master-table.component";
// import {MyFormComponent} from '../my-form/my-form.component';
// import {TableComponent} from '../common/table-v1/table.component';
// import {TableTwoComponent} from '../common/table-v2/table.component';
// import {MasterTableComponent} from '../costume-components/master-table/master-table.component';
// import {MasterMultiSelectComponent} from '../costume-components/master-multi-select/master/master-multi-select.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    pathMatch: 'full'

  },
  // {
  //   path: 'table',
  //   component: TableComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'tablev2',
  //   component: TableTwoComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'form',
  //   component: MyFormComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'mTable',
  //   component: MasterTableComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'mMultiSelect',
  //   component: MasterMultiSelectComponent,
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {
}
