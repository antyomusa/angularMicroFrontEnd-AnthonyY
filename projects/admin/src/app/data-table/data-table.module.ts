import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

@NgModule({
  declarations: [
    DataTableComponent,
    CreateDataComponent,
    EditDataComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule
  ]
})
export class DataTableModule { }
