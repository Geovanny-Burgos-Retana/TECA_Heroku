import { TestBed } from '@angular/core/testing';

import { RecordatorioService } from './recordatorio.service';

describe('RecordatorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordatorioService = TestBed.get(RecordatorioService);
    expect(service).toBeTruthy();
  });
});
