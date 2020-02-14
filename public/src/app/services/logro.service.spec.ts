import { TestBed } from '@angular/core/testing';

import { LogroService } from './logro.service';

describe('LogroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogroService = TestBed.get(LogroService);
    expect(service).toBeTruthy();
  });
});
