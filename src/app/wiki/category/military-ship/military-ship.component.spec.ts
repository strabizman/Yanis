import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryShipComponent } from './military-ship.component';

describe('MilitaryShipComponent', () => {
  let component: MilitaryShipComponent;
  let fixture: ComponentFixture<MilitaryShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
