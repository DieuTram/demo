import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	hero: Hero;
  constructor() {
	  this.hero = new Hero();
	  this.hero.name = 'Good Girl';
	  this.hero.skills = ['Cute','Cry'];
  }

  ngOnInit() {
  }

}
