import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsWikiComponent } from './ships-wiki.component';

describe('ShipsWikiComponent', () => {
  let component: ShipsWikiComponent;
  let fixture: ComponentFixture<ShipsWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsWikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
