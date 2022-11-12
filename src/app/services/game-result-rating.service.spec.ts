import { TestBed } from '@angular/core/testing';

import { GameLevelResultAndRatingService } from './game-level-result-and-rating.service';

describe('GameLevelResultAndRatingService', () => {
  let service: GameLevelResultAndRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLevelResultAndRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
