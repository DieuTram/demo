import { Injectable } from '@angular/core';
import {Hero} from '../entities/hero';
import {listHero} from '../data/heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }
  getListHero(): Observable<Hero[]> {
    this.messageService.add('Load list hero');
    return of(listHero);
  }
  getHeroById(id: number): Observable<Hero> {
    this.messageService.add('Load hero ' + id);
    return of(listHero.find(hero => hero.id === id));
  }
}
