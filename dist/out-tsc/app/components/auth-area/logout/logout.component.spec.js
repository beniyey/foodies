import { TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
describe('LogoutComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LogoutComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LogoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=logout.component.spec.js.map