import { TestBed } from '@angular/core/testing';
import { AddProductComponent } from './add-product.component';
describe('AddProductComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddProductComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AddProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-product.component.spec.js.map