import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';

export const HEROES: Hero[] = [
  { name: 'Mr. Nice', power: 'Friendship' },
  { name: 'Narco', power: 'Friendship' },
  { name: 'Bombasto', power: 'Friendship' },
  { name: 'Celeritas', power: 'Friendship'  },
  { name: 'Magneta', power: 'Friendship' },
  { name: 'RubberMan', power: 'Friendship' },
  { name: 'Dynama', power: 'Friendship' },
  { name: 'Dr IQ', power: 'Friendship' },
  { name: 'Magma', power: 'Friendship' },
  { name: 'Tornado', power: 'Friendship' }
];

export class HeroServiceMock {
   
  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}

export const afsCollectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of(HEROES))
}

export const afsStub = {
  collection: jasmine.createSpy('collection').and.returnValue(afsCollectionStub)
}
