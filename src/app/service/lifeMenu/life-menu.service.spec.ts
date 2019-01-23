import { TestBed } from '@angular/core/testing';

import { LifeMenuService } from './life-menu.service';

describe('LifeMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeMenuService = TestBed.get(LifeMenuService);
    expect(service).toBeTruthy();
  });
});
