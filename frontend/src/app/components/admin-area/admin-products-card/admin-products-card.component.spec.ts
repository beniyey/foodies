import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsCardComponent } from './admin-products-card.component';

describe('AdminProductsCardComponent', () => {
  let component: AdminProductsCardComponent;
  let fixture: ComponentFixture<AdminProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
