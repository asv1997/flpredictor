import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLeagueComponent } from './choose-league.component';

describe('ChooseLeagueComponent', () => {
  let component: ChooseLeagueComponent;
  let fixture: ComponentFixture<ChooseLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
