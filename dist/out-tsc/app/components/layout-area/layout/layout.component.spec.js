import { TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
describe('LayoutComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=layout.component.spec.js.map