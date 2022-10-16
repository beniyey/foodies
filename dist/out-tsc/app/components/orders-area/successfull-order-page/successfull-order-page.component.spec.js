import { TestBed } from '@angular/core/testing';
import { SuccessfullOrderPageComponent } from './successfull-order-page.component';
describe('SuccessfullOrderPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SuccessfullOrderPageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SuccessfullOrderPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=successfull-order-page.component.spec.js.map