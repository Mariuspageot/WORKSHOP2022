import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Chart, ChartConfiguration} from "chart.js";
import {Region} from "../Models/Region";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  region: Region;

  constructor(private router: Router) {
    this.region = new Region('', 0, 0, 0);
  }

  ngOnInit(): void {
  }

  goToRegion(region: string) {
    this.router.navigate(['/region']);
  }

  public data1: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [1, 1.2, 1.3, 1.6, 1.5, 2, 2.1, 2.2, 2.5, 2.4, 2.7, 3],
        label: 'Charbon',
        backgroundColor: 'rgba(84,86,86,0)',
        borderColor: 'rgb(84 86 86)',
        pointBackgroundColor: 'rgb(84 86 86)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(84 86 86)',
        fill: 'origin',
      },
      {
        data: [0.3, 0.5, 1, 1.1, 1.3, 1.5, 1.5, 1.7, 2, 2.3, 2.5, 2.8],
        label: 'Gaz naturel',
        backgroundColor: 'rgba(99,152,167,0)',
        borderColor: 'rgb(99 152 167)',
        pointBackgroundColor: 'rgb(99 152 167)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99 152 167)',
        fill: 'origin',
      },
      {
        data: [0.1, 0.2, 0.3, 0.6, 1, 1.3, 1.6, 2, 2, 2.3, 2.4, 2.5],
        label: 'Hydroélectricité',
        backgroundColor: 'rgba(198,199,202,0)',
        borderColor: 'rgb(198 199 202)',
        pointBackgroundColor: 'rgb(198 199 202)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(198 199 202)',
        fill: 'origin',
      },
      {
        data: [3, 3.2, 3.3, 3.6, 3.8, 4, 4.2, 4.2, 4.5, 4.4, 4.7, 4.8],
        label: 'Produit pétroliers',
        backgroundColor: 'rgba(251,213,30,0)',
        borderColor: 'rgb(251 213 30)',
        pointBackgroundColor: 'rgb(251 213 30)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(251 213 30)',
        fill: 'origin',
      },
      {
        data: [2, 2.2, 2.3, 2.6, 2.5, 3, 3.1, 3.2, 3.5, 3.4, 3.7, 4],
        label: 'Nucléaire',
        backgroundColor: 'rgba(5,163,221,0)',
        borderColor: 'rgb(5 163 221)',
        pointBackgroundColor: 'rgb(5 163 221)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(5 163 221)',
        fill: 'origin',
      },
      {
        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5, 0.5, 0.6, 0.6, 0.7, 0.8],
        label: 'Biomasse et déchets',
        backgroundColor: 'rgba(0,112,106,0)',
        borderColor: 'rgb(0 112 106)',
        pointBackgroundColor: 'rgb(0 112 106)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0 112 106)',
        fill: 'origin',
      },
      {
        data: [0.0, 0.0, 0.2, 0.4, 0.4, 0.5, 0.6, 0.6, 0.7, 0.8, 0.8, 0.9],
        label: 'Autres (géothermie, solaire, éolien...)',
        backgroundColor: 'rgba(96,168,52,0)',
        borderColor: 'rgb(96 168 52)',
        pointBackgroundColor: 'rgb(96 168 52)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(96 168 52)',
        fill: 'origin',
      }
    ],
    labels: ['1971', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2022']
  };

  public data2: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
        label: 'Etats unis et Canada',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(93,153,211,1)',
        pointBackgroundColor: 'rgba(93,153,211,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
        label: 'Amerique Latine',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(165,165,164,1)',
        pointBackgroundColor: 'rgba(165,165,164,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [2, 2.1, 2.2, 2.1, 2.2, 2.3, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2],
        label: 'Europe et Russie',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(148,201,239,1)',
        pointBackgroundColor: 'rgba(148,201,239,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.01, 0.01, 0.01, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2],
        label: 'Moyen-Orient',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(39,94,145,1)',
        pointBackgroundColor: 'rgba(39,94,145,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.4, 0.6, 0.8, 1, 1.5, 1.9],
        label: 'Chine',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(234,124,50,1)',
        pointBackgroundColor: 'rgba(234,124,50,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.4, 0.6, 0.8, 1, 1.5, 1.9],
        label: 'Reste de l\'Asie',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(254,201,1,1)',
        pointBackgroundColor: 'rgba(254,201,1,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
        label: 'Afrique',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(112,172,72,0.3)',
        pointBackgroundColor: 'rgba(112,172,72,0.3)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02],
        label: 'Océanie',
        backgroundColor: 'rgba(255,0,0,0.0)',
        borderColor: 'rgba(156,72,14,1)',
        pointBackgroundColor: 'rgba(156,72,14,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['1971', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2022']
  };
  title1 = 'Consommation mondiale d’énergie primaire par type';
  title2 = 'Consommation énergétique mondiale par pays';

  showRegion(region: string) {
    this.dataRegion.forEach(regionInfo => {
      if (regionInfo.name === region) {
        this.region = regionInfo;
      }
    })
  }

  dataRegion: Region[] = [
    new Region('Hauts-de-France', 6, 31806, 42345),
    new Region('Normandie', 3.319, 29907, 42345),
    new Region('Bretagne', 3.329, 27208, 39000),
    new Region('Centre-Val de Loire', 2.567, 39151, 42345),
    new Region('Ile-de-France', 12.21, 	12011, 42345),
    new Region('Grand Est', 5.518, 57441, 42345),
    new Region('Nouvelle Aquitaine', 5.987, 84036, 42345),
    new Region('Occitanie', 5.893, 72724, 42345),
    new Region('Provence Alpes Cote d\'Azur', 5.059, 31400, 42345),
    new Region('Pays de la Loire', 3.787, 32082, 14000),
    new Region('Bourgogne-Franche-Comté', 2.795, 47784, 42345),
    new Region('Auvergne-Rhône-Alpes', 8.027, 69711, 42345),
  ]
}
