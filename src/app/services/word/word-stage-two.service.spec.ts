import { TestBed } from '@angular/core/testing';

import { WordStageTwoService } from './word-stage-two.service';

describe('WordStageTwoService', () => {
  let service: WordStageTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordStageTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
