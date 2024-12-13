import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingShipComponent } from './trading-ship.component';

describe('TradingShipComponent', () => {
  let component: TradingShipComponent;
  let fixture: ComponentFixture<TradingShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
