import { TestBed } from '@angular/core/testing';

import { LrpActivityService } from './lrp-activity.service';

describe('LrpActivityService', () => {
  let service: LrpActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrpActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
