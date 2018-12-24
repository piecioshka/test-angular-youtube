import { TestBed } from '@angular/core/testing';

import { VideosService } from './videos.service';

describe('VideosService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: VideosService = TestBed.get(VideosService);
        expect(service).toBeTruthy();
    });
});
