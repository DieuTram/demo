import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Villain} from '../entities/villain';
import {listVillain} from '../data/villains';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor(private messageService: MessageService) {
  }

  getListVillain(): Observable<Villain[]> {
    this.messageService.add('Load list villain');
    return of(listVillain);
  }

  getVillainById(id: number): Observable<Villain> {
    this.messageService.add('Load villain: ' + id);
    return of(listVillain.find(x => x.id === id));
  }
}
