import { TestBed } from '@angular/core/testing';

import { LrpLetteringActivityService } from './lrp-lettering-activity.service';

describe('LrpLetteringActivityService', () => {
  let service: LrpLetteringActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrpLetteringActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
