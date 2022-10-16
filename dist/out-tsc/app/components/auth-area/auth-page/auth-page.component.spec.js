import { TestBed } from '@angular/core/testing';
import { AuthPageComponent } from './auth-page.component';
describe('AuthPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthPageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-page.component.spec.js.map