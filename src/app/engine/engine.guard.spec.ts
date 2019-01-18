import { TestBed, async, inject } from '@angular/core/testing';

import { EngineGuard } from './engine.guard';

describe('EngineGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineGuard]
    });
  });

  it('should ...', inject([EngineGuard], (guard: EngineGuard) => {
    expect(guard).toBeTruthy();
  }));
});
