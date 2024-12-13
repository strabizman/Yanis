import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingShipComponent } from './building-ship.component';

describe('BuildingShipComponent', () => {
  let component: BuildingShipComponent;
  let fixture: ComponentFixture<BuildingShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
