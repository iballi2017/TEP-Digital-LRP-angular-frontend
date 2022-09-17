import { TestBed } from '@angular/core/testing';

import { StageThreeActivityService } from './stage-three-activity.service';

describe('StageThreeActivityService', () => {
  let service: StageThreeActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageThreeActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
