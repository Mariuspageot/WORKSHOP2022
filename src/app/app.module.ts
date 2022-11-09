import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgChartsModule, NgChartsConfiguration} from 'ng2-charts';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { VilleComponent } from './ville/ville.component';
import { ComparatifComponent } from './comparatif/comparatif.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ConsoEnergieRegionsComponent } from './Components/conso-energie-regions/conso-energie-regions.component';
import {MatButtonModule} from "@angular/material/button";
import { TypeEnergieRegionsComponent } from './Components/type-energie-regions/type-energie-regions.component';

import { MyAreaChartComponent } from './accueil/my-area-chart/my-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    VilleComponent,
    ComparatifComponent,
    MyAreaChartComponent,
    ConsoEnergieRegionsComponent,
    TypeEnergieRegionsComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AccueilComponent},
      {path: 'region', component: RegionComponent},
      {path: 'ville', component: VilleComponent},
      {path: 'comparatif', component: ComparatifComponent},
    ]),
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [
    {provide: NgChartsConfiguration, useValue: {generateColors: false}},
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
