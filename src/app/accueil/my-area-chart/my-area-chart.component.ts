import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartConfiguration, ChartDataset, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {default as Annotation} from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-my-area-chart',
  templateUrl: './my-area-chart.component.html',
  styleUrls: ['./my-area-chart.component.css']
})
export class MyAreaChartComponent implements OnInit {

  // @ts-ignore
  @Input() data: ChartConfiguration['data'];
  // @ts-ignore
  @Input() title: string;

  constructor() {
    Chart.register(Annotation)
  }

  ngOnInit(): void {
    // @ts-ignore
    this.lineChartOptions  = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
          {
            position: 'left',
            title: {
              display: true,
              text: 'En Gtep'
            }
          },

      },
      plugins: {
        legend: {display: true},
        title: {
          display: true,
          text: this.title,
        },


      }
    };
  }


  // @ts-ignore
  public lineChartOptions: ChartConfiguration['options'];

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.data.datasets.length; i++) {
      for (let j = 0; j < this.data.datasets[i].data.length; j++) {
        this.data.datasets[i].data[j] = MyAreaChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

}
