import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';
import {listHero} from '../data/heroes';


@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero: Hero[];
  selectedHero: Hero;
  constructor() {
    this.listHero = listHero;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
