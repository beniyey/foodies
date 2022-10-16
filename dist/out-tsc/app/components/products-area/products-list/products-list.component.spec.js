import { TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
describe('ProductsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ProductsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=products-list.component.spec.js.map