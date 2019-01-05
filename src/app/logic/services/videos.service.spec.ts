import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VideosService } from './videos.service';

describe('VideosService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule]
    }));

    it('should be created', () => {
        const service: VideosService = TestBed.get(VideosService);
        expect(service).toBeTruthy();
    });
});
