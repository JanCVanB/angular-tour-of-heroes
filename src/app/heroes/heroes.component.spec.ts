import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { environment } from '../../environments/environment';
import { HeroViewComponent } from '../hero-view/hero-view.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { HeroServiceMock } from '../hero.service.mock';
import { MessageService } from '../message.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroViewComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: HeroService, useClass: HeroServiceMock },
        MessageService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
