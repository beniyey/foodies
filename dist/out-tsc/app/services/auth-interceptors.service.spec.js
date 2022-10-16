import { TestBed } from '@angular/core/testing';
import { AuthInterceptorsService } from './auth-interceptors.service';
describe('AuthInterceptorsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthInterceptorsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-interceptors.service.spec.js.map