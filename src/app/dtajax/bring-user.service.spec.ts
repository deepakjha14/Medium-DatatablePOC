import { TestBed } from '@angular/core/testing';

import { BringUserService } from '../shared/bring-user.service';

describe('BringUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BringUserService = TestBed.get(BringUserService);
    expect(service).toBeTruthy();
  });
});
