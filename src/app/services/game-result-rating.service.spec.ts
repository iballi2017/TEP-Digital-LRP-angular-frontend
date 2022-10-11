import { TestBed } from '@angular/core/testing';

import { GameResultRatingService } from './game-result-rating.service';

describe('GameResultRatingService', () => {
  let service: GameResultRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameResultRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
