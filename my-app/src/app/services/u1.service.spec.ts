import { TestBed } from '@angular/core/testing';

import { U1Service } from './u1.service';

describe('U1Service', () => {
  let service: U1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(U1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
