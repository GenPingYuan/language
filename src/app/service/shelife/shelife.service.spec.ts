import { TestBed } from '@angular/core/testing';

import { ShelifeService } from './shelife.service';

describe('ShelifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShelifeService = TestBed.get(ShelifeService);
    expect(service).toBeTruthy();
  });
});
