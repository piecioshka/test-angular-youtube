import { TestBed, inject } from '@angular/core/testing';

import { SortingService } from './sorting.service';

describe('SortingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortingService]
    });
  });

  it('should ...', inject([SortingService], (service: SortingService) => {
    expect(service).toBeTruthy();
  }));
});
