import { TestBed } from '@angular/core/testing';
import { OrderPageComponent } from './order-page.component';
describe('OrderPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrderPageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OrderPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=order-page.component.spec.js.map