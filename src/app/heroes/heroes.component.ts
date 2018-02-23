import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private db: AngularFirestore,
    private heroService: HeroService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.messageService.add('HeroesComponent: selected hero ' + JSON.stringify(hero))
    this.selectedHero = hero;
    this.db.collection('heroes').doc(hero.id.toString()).set(hero);
  }

}
