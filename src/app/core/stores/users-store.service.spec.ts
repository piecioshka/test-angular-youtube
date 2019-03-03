import { TestBed } from '@angular/core/testing';

import { UsersStoreService } from './users-store.service';

describe('UsersStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: UsersStoreService = TestBed.get(UsersStoreService);
        expect(service).toBeTruthy();
    });
});
