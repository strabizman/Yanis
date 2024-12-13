import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialShipComponent } from './industrial-ship.component';

describe('IndustrialShipComponent', () => {
  let component: IndustrialShipComponent;
  let fixture: ComponentFixture<IndustrialShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
