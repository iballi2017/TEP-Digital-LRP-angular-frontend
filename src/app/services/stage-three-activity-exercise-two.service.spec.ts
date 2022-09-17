import { TestBed } from '@angular/core/testing';

import { StageThreeActivityExerciseTwoService } from './stage-three-activity-exercise-two.service';

describe('StageThreeActivityExerciseTwoService', () => {
  let service: StageThreeActivityExerciseTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageThreeActivityExerciseTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
