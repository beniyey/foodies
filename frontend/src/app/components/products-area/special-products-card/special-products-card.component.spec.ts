import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductsCardComponent } from './special-products-card.component';

describe('SpecialProductsCardComponent', () => {
  let component: SpecialProductsCardComponent;
  let fixture: ComponentFixture<SpecialProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialProductsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
