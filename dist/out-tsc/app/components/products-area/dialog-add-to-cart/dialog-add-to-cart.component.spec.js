import { TestBed } from '@angular/core/testing';
import { DialogAddToCartComponent } from './dialog-add-to-cart.component';
describe('DialogAddToCartComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DialogAddToCartComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DialogAddToCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dialog-add-to-cart.component.spec.js.map