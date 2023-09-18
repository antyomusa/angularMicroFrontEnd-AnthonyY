import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { data } from './data';
@Component({
  selector: 'app-time-axis-chart',
  templateUrl: './time-axis-chart.component.html',
  styleUrls: ['./time-axis-chart.component.scss']
})
export class TimeAxisChartComponent {

  public optionsTimeAxis: AgChartOptions;

  constructor() {
    this.optionsTimeAxis = {
      theme: {
        palette: {
          fills: [
            '#5BC0EB',
            '#FDE74C',
            '#9BC53D',
            '#E55934',
            '#FA7921',
            '#fa3081',
          ],
          strokes: [
            '#5BC0EB',
            '#FDE74C',
            '#9BC53D',
            '#E55934',
            '#FA7921',
            '#fa3081',
          ],
        },
        overrides: {
          line: { series: { strokeWidth: 3, marker: { enabled: false } } },
        },
      },
      autoSize: true,
      title: {
        text: 'Average Transaction Value Per User',
        fontSize: 18,
        spacing: 25,
      },
      footnote: {
        text: 'Source: Catatan yang dikirimkan Bank Administrator RDN kepada KSEI',
      },
      padding: {
        left: 40,
        right: 40,
      },
      series: [
        {
          data: data.ci,
          type: 'line',
          title: 'Saham',
          xKey: 'time',
          yKey: 'magnitude',
        },
        {
          data: data.hv,
          type: 'line',
          title: 'Reksadana Obligasi Pemerintah',
          xKey: 'time',
          yKey: 'magnitude',
        },
        {
          data: data.nc,
          type: 'line',
          title: 'Reksadana Pasar Uang',
          xKey: 'time',
          yKey: 'magnitude',
        },
        {
          data: data.ok,
          type: 'line',
          title: 'Reksadana Campuran',
          xKey: 'time',
          yKey: 'magnitude',
        },
      ],
      axes: [
        {
          position: 'bottom',
          type: 'time',
          label: {
            format: '%d/%m',
          },
        },
        {
          position: 'left',
          type: 'number',
          title: {
            text: 'In Indonesian Rupiah (Rp)',
          },
        },
      ],
      legend: {
        item: {
          marker: {
            strokeWidth: 0,
          },
        },
      },
    };
  }
}
