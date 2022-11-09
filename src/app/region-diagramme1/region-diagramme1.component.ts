import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-region-diagramme1',
  templateUrl: './region-diagramme1.component.html',
  styleUrls: ['./region-diagramme1.component.css']
})
export class RegionDiagramme1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  public barChartLabels: string[] = [ 'Charbon', 'Nucléaire', 'Eolien', 'Barrage', 'Gaz', 'Petrole' ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [{
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      backgroundColor:[
        'rgb(131, 145, 146 )',
        'rgb(231, 76, 60)',
        'rgb(241, 196, 15  )',
        'rgb(40, 180, 99)',
        'rgb(44, 62, 80  )',
        'rgb(220, 118, 51 )'

      ]
      , label: 'Type d energie' },
    ]
  };
  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

}
