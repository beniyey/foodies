import { TestBed } from '@angular/core/testing';
import { WelcomePageComponent } from './welcome-page.component';
describe('WelcomePageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WelcomePageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(WelcomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=welcome-page.component.spec.js.map