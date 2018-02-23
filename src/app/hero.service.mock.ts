import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: '11', name: 'Mr. Nice' },
  { id: '12', name: 'Narco' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' }
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
