import { TestBed } from '@angular/core/testing';
import { SpecialProductsCardComponent } from './special-products-card.component';
describe('SpecialProductsCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SpecialProductsCardComponent]
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
//# sourceMappingURL=special-products-card.component.spec.js.map