import { TestBed } from '@angular/core/testing';
import { ProductsCardComponent } from './products-card.component';
describe('ProductsCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductsCardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ProductsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=products-card.component.spec.js.map