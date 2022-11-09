import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-comparatif',
  templateUrl: './comparatif.component.html',
  styleUrls: ['./comparatif.component.css']
})
export class ComparatifComponent implements OnInit {
  public regions : FormControl;
  public listRegions : string[];
  constructor() {
    this.regions = new FormControl('');
    this.listRegions = ["Normandie", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "'Provence-Alpes-Côte d'Azur"];
  }

  ngOnInit(): void {
  }



}
