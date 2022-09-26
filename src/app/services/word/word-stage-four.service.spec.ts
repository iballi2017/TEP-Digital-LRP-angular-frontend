import { TestBed } from '@angular/core/testing';

import { WordStageFourService } from './word-stage-four.service';

describe('WordStageFourService', () => {
  let service: WordStageFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordStageFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
