import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

const routes: Routes = [
  {
    path: '',
    component: DataTableComponent
  },
  {
    path: 'create',
    component: CreateDataComponent
  },
  {
    path: 'edit/:id',
    component: EditDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
