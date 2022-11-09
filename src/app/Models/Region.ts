export class Region {
  name: string;
  habitant: number;
  superficie: number;
  panneaux: number;


  constructor(name: string, habitant: number, superficie: number, panneaux: number) {
    this.name = name;
    this.habitant = habitant;
    this.superficie = superficie;
    this.panneaux = panneaux;
  }
}
