import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationShipComponent } from './exploration-ship.component';

describe('ExplorationShipComponent', () => {
  let component: ExplorationShipComponent;
  let fixture: ComponentFixture<ExplorationShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorationShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorationShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
