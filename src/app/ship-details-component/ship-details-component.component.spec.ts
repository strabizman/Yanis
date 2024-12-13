import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDetailsComponentComponent } from './ship-details-component.component';

describe('ShipDetailsComponentComponent', () => {
  let component: ShipDetailsComponentComponent;
  let fixture: ComponentFixture<ShipDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
