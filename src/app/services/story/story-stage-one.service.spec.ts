import { TestBed } from '@angular/core/testing';

import { StoryStageOneService } from './story-stage-one.service';

describe('StoryStageOneService', () => {
  let service: StoryStageOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryStageOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
