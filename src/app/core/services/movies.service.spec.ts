import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule]
    }));

    it('should be created', () => {
        const service: MoviesService = TestBed.get(MoviesService);
        expect(service).toBeTruthy();
    });
});
