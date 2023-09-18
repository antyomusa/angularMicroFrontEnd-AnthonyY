import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { getData } from './data';

@Component({
  selector: 'app-line-gaps',
  templateUrl: './line-gaps.component.html',
  styleUrls: ['./line-gaps.component.scss']
})
export class LineGapsComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      autoSize: true,
      data: getData(),
      theme: {
        palette: {
          fills: [
            '#0b1791',
            '#be2a2c',
            '#f6d24a',
            '#ce1126',
            '#002d62',
            '#1b4e9e',
            '#f6d24a',
            '#0073cf',
            '#e88532',
            '#000000',
            '#006847',
            '#c22b38',
            '#042279',
            '#4997d0',
            '#2868c1',
            '#459945',
          ],
          strokes: [
            '#0b1791',
            '#f6d24a',
            '#f6d24a',
            '#ce1126',
            '#ce1126',
            '#fade4b',
            '#be2a2c',
            '#0073cf',
            '#469c65',
            '#fed100',
            '#ce1126',
            '#1e5190',
            '#bf2b30',
            '#4997d0',
            '#2868c1',
            '#459945',
          ],
        },
        overrides: {
          cartesian: {
            series: {
              line: {
                highlightStyle: {
                  series: {
                    dimOpacity: 0.2,
                    strokeWidth: 4,
                  },
                },
                marker: { enabled: true },
              },
            },
          },
        },
      },
      title: {
        text: 'Average Revenue Per User',
        fontSize: 18,
        spacing: 25,
      },
      footnote: {
        text: 'Source: Catatan yang dikirimkan Bank Administrator RDN kepada KSEI',
      },
      series: [
        {
          type: 'line',
          xKey: 'week',
          yKey: 'ekuitas',
          yName: 'Ekuitas',
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'rpt',
          yName: 'Reksadana Pendapatan Tetap',
          marker: {
            strokeWidth: 2,
          },
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'obligasi',
          yName: 'Obligasi',
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'kas',
          yName: 'Kas',
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'rpu',
          yName: 'Reksadana Pasar uang',
          marker: {
            strokeWidth: 2,
          },
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'rdc',
          yName: 'Reksadana Campuran',
          marker: {
            strokeWidth: 2,
          },
        },
        {
          type: 'line',
          xKey: 'week',
          yKey: 'rdp',
          yName: 'Reksadana Dana Pensilangan',
          marker: {
            strokeWidth: 2,
          },
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: {
            text: 'Week',
          },
          label: {
            formatter: (params) => (params.index % 3 ? '' : params.value),
          },
        },
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'In Indonesian Rupiah (Rp)',
          },
          nice: false,
          min: 0.2,
          max: 1,
        },
      ],
      legend: {
        item: {
          paddingY: 15,
        },
        spacing: 30,
      },
    };
  }
}
