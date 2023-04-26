import { TestBed } from '@angular/core/testing';

import { StateListDetailService } from './state-list-detail.service';

describe('StateListDetailService', () => {
  let service: StateListDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateListDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
