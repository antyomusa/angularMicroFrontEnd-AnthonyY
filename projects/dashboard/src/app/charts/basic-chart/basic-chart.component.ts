import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent {

  public options: any;

  data = [
    {
      quarter: 'Q1',
      spending: 700,
    },
    {
      quarter: 'Q2',
      spending: 600,
    },
    {
      quarter: 'Q3',
      spending: 560,
    },
    {
      quarter: 'Q4',
      spending: 450,
    },
  ];

  constructor() {


    this.options = {
      data: this.data,
      series: [{
        xKey: 'quarter',
        yKey: 'spending',
      }],
    };

  }

}
