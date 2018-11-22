import {Injectable} from '@angular/core';
import {Hero} from '../entities/hero';
import {listHero} from '../data/heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  heroesUrl = 'http://192.168.1.148:8080/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getListHero(): Observable<Hero[]> {
    //this.messageService.add('Load list hero');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('Load list Heroes')),
        catchError(this.handleError('getListHero', [])));
  }

  getHeroById(id: number): Observable<Hero> {
    //this.messageService.add('Load hero ' + id);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`Load Hero ${id}`)),
        catchError(this.handleError('getHeroById', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
