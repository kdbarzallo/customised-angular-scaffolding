import { TestBed } from '@angular/core/testing';

import { ObtainDataService } from './obtain-data.service';

describe('ObtainDataService', () => {
  let service: ObtainDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtainDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
