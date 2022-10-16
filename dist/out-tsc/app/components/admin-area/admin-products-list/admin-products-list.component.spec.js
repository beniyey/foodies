import { TestBed } from '@angular/core/testing';
import { AdminProductsListComponent } from './admin-products-list.component';
describe('AdminProductsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdminProductsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AdminProductsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-products-list.component.spec.js.map