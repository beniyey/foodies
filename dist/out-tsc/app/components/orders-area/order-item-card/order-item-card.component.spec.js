import { TestBed } from '@angular/core/testing';
import { OrderItemCardComponent } from './order-item-card.component';
describe('OrderItemCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrderItemCardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OrderItemCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=order-item-card.component.spec.js.map