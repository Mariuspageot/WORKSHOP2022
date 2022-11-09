import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgChartsModule, NgChartsConfiguration} from 'ng2-charts';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {RegionComponent} from './region/region.component';
import {VilleComponent} from './ville/ville.component';
import {ComparatifComponent} from './comparatif/comparatif.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { MyAreaChartComponent } from './accueil/my-area-chart/my-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    VilleComponent,
    ComparatifComponent,
    MyAreaChartComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: '', component: AccueilComponent},
      {path: 'region', component: RegionComponent},
      {path: 'ville', component: VilleComponent},
      {path: 'comparatif', component: ComparatifComponent},
    ]),
  ],
  providers: [
    {provide: NgChartsConfiguration, useValue: {generateColors: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
