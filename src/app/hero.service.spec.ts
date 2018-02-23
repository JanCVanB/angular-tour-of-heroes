import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';

import { HeroService } from './hero.service';
import { afsStub } from './hero.service.mock';
import { MessageService } from './message.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: afsStub },
        MessageService
      ]
    });
  });

  // it('should be created', inject([HeroService], (service: HeroService) => {
  //   expect(service).toBeTruthy();
  // }));
});
