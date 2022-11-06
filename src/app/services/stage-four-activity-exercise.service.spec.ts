import { TestBed } from '@angular/core/testing';

import { StageFourActivityExerciseService } from './stage-four-activity-exercise.service';

describe('StageFourActivityExerciseService', () => {
  let service: StageFourActivityExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageFourActivityExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
