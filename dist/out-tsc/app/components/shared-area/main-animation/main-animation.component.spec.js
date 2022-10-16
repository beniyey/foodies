import { TestBed } from '@angular/core/testing';
import { MainAnimationComponent } from './main-animation.component';
describe('MainAnimationComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainAnimationComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MainAnimationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=main-animation.component.spec.js.map