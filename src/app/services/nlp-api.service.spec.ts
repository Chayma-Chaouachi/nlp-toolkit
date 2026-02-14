import { TestBed } from '@angular/core/testing';

import { NlpApiService } from './nlp-api.service';

describe('NlpApiService', () => {
  let service: NlpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NlpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
