import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceShipComponent } from './race-ship.component';

describe('RaceShipComponent', () => {
  let component: RaceShipComponent;
  let fixture: ComponentFixture<RaceShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
