import { TestBed } from '@angular/core/testing';
import { AdminProductsCardComponent } from './admin-products-card.component';
describe('AdminProductsCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdminProductsCardComponent]
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
//# sourceMappingURL=admin-products-card.component.spec.js.map