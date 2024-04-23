import { TestBed } from '@angular/core/testing';

import { RecNiveauService } from './rec-niveau.service';

describe('RecNiveauService', () => {
  let service: RecNiveauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecNiveauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
