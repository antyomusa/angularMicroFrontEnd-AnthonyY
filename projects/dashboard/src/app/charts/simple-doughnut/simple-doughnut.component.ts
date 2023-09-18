import { Component } from '@angular/core';
import { getData } from './data';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-simple-doughnut',
  templateUrl: './simple-doughnut.component.html',
  styleUrls: ['./simple-doughnut.component.scss']
})
export class SimpleDoughnutComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      autoSize: true,
      data,
      title: {
        text: 'Tabunganku',
        fontSize: 18,
        spacing: 25,
      },
      footnote: {
        text: 'Source: Catatan yang dikirimkan Bank Administrator RDN kepada KSEI',
      },
      series: [
        {
          type: 'pie',
          calloutLabelKey: 'type',
          fillOpacity: 0.9,
          strokeWidth: 0,
          angleKey: 'count',
          sectorLabelKey: 'count',
          calloutLabel: {
            enabled: false,
          },
          sectorLabel: {
            color: 'white',
            fontWeight: 'bold',
            formatter: ({ datum, sectorLabelKey }) => {
              const value = datum[sectorLabelKey!];
              return numFormatter.format(value);
            },
          },
          title: {
            text: 'Annual Count',
          },
          fills: [
            '#fb7451',
            '#f4b944',
            '#57cc8b',
            '#49afda',
            '#3988dc',
            '#72508c',
            '#b499b5',
            '#b7b5ba',
          ],
          innerRadiusRatio: 0.5,
          innerLabels: [
            {
              text: numFormatter.format(total),
              fontSize: 24,
              fontWeight: 'bold',
            },
            {
              text: 'Total',
              fontSize: 16,
            },
          ],
          highlightStyle: {
            item: {
              fillOpacity: 0,
              stroke: '#535455',
              strokeWidth: 1,
            },
          },
          tooltip: {
            renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
              return {
                title,
                content: `${datum[calloutLabelKey!]}: ${numFormatter.format(
                  datum[sectorLabelKey!]
                )}`,
              };
            },
          },
        },
      ],
    };
  }

}

const data = getData();
const numFormatter = new Intl.NumberFormat('en-US');
const total = data.reduce((sum, d) => sum + d['count'], 0);
