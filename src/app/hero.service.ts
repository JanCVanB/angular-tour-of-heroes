import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { MessageService } from './message.service'

@Injectable()
export class HeroService {

  constructor(
    private afs: AngularFirestore,
    private messageService: MessageService
  ) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = this.afs.collection<Hero>('heroes').valueChanges();
    this.messageService.add('HeroService: fetched all heroes');
    return heroes
  }

}
