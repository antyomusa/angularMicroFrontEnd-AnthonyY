import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { TimeAxisChartComponent } from './time-axis-chart/time-axis-chart.component';
import { SimpleDoughnutComponent } from './simple-doughnut/simple-doughnut.component';


@NgModule({
  declarations: [
    ChartsComponent,
    ColumnChartComponent,
    TimeAxisChartComponent,
    SimpleDoughnutComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    AgChartsAngularModule
  ]
})
export class ChartsModule { }
