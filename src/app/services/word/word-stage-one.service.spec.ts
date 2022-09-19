import { TestBed } from '@angular/core/testing';

import { WordStageOneService } from './word-stage-one.service';

describe('WordStageOneService', () => {
  let service: WordStageOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordStageOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
