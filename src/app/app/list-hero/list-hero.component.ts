import {Component, OnInit} from '@angular/core';
import {Hero} from '../entities/hero';
import {HeroService} from '../services/hero.service';


@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  onSelect(id: number): void {
    this.heroService.getHeroById(id).subscribe(hero => this.selectedHero = hero);
  }

  ngOnInit() {
    this.heroService.getListHero().subscribe(
      heroes => {
        this.listHero = heroes;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
