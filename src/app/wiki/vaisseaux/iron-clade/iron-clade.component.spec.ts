import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronCladeComponent } from './iron-clade.component';

describe('IronCladeComponent', () => {
  let component: IronCladeComponent;
  let fixture: ComponentFixture<IronCladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IronCladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IronCladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
