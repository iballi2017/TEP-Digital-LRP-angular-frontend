import { TestBed } from '@angular/core/testing';

import { WordStageThreeService } from './word-stage-three.service';

describe('WordStageThreeService', () => {
  let service: WordStageThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordStageThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
