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
      quarter: '2020',
      spending: 700,
    },
    {
      quarter: '2021',
      spending: 650,
    },
    {
      quarter: '2022',
      spending: 690,
    },
    {
      quarter: '2023',
      spending: 750,
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
