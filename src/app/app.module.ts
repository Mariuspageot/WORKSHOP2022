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


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    VilleComponent,
    ComparatifComponent,
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
    MatNativeDateModule
  ],
  providers: [
    {provide: NgChartsConfiguration, useValue: {generateColors: false}},
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
