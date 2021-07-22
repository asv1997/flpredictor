import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictTableComponent } from './predict-table.component';

describe('PredictTableComponent', () => {
  let component: PredictTableComponent;
  let fixture: ComponentFixture<PredictTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
