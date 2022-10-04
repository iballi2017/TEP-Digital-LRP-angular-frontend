import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreenLoaderComponent } from './game-screen-loader.component';

describe('GameScreenLoaderComponent', () => {
  let component: GameScreenLoaderComponent;
  let fixture: ComponentFixture<GameScreenLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameScreenLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
