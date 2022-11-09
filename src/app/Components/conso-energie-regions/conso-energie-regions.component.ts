import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-conso-energie-regions',
  templateUrl: './conso-energie-regions.component.html'
})
export class ConsoEnergieRegionsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
      title:{
        display: true,
        text: "Consommation des deux régions par année"
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartConfiguration['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {data: [65, 59, 80, 81, 56, 55, 40],
        label: "Pays de la Loire",
        backgroundColor: ['#B3DEC1'],
        borderColor: ['#4b8462'],
        borderWidth: 1
      },
      {data: [28, 48, 40, 19, 86, 27, 90],
        label: "Nouvelle-Aquitaine",
        backgroundColor: ['#59AFFF'],
        borderColor: ['#114378'],
        borderWidth: 1,
      }
    ]
  };
}
