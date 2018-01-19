import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import Hero from './ts/hero';
import { HEROES } from './ts/mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable< Hero[]>{
    console.log('sss')
    this.messageService.add("'HeroService: Fetched heroes");
    return of(HEROES);
  }
}
