import {Component, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import colors from "../../../assets/colors.json"

@Component({
  selector: 'app-type-energie-regions',
  templateUrl: './type-energie-regions.component.html'
})
export class TypeEnergieRegionsComponent {

  constructor() {

  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // Pie
  public pieChartOptionsRegion1: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title:{
        display: true,
        text:"Utilisation des ressources en Pays de la Loire"
      }
    }
  };
  public pieChartOptionsRegion2: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title:{
        display: true,
        text:"Utilisation des ressources en Nouvelle aquitaine"
      }
    }
  };
  public pieChartDataRegion1: ChartData = {
    labels: ['Charbon', 'Gaz Naturel', 'Hydroélectricité', 'Produits Pétroliers', "Nucléaire", "Biomasse", "Autres (géothermie, solaire, éolien,...)"],
    datasets: [{
      data: [300, 500, 100, 200, 500, 600, 700],
      backgroundColor: [
        colors["brand-color"],
        colors["blue-color"],
        colors["abricot-color"],
        colors["green-color"],
        colors["orange-color"],
        colors["pink-color"],
        colors["violet-color"]
      ]
    }]
  };

  public pieChartDataRegion2: ChartData = {
    labels: ['Charbon', 'Gaz Naturel', 'Hydroélectricité', 'Produits Pétroliers', "Nucléaire", "Biomasse", "Autres (géothermie, solaire, éolien,...)"],
    datasets: [{
      data: [300, 700, 100, 400, 500, 600,200 ],
      backgroundColor: [
        colors["brand-color"],
        colors["blue-color"],
        colors["abricot-color"],
        colors["green-color"],
        colors["orange-color"],
        colors["pink-color"],
        colors["violet-color"]
      ]
    }]
  };


}
