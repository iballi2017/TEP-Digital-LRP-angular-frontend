import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IIdentityComponent } from './i-identity.component';

describe('IIdentityComponent', () => {
  let component: IIdentityComponent;
  let fixture: ComponentFixture<IIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
