import { TestBed } from '@angular/core/testing';
import { CartItemCardComponent } from './cart-item-card.component';
describe('CartItemCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CartItemCardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CartItemCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cart-item-card.component.spec.js.map