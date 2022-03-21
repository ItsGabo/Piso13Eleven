import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleauthfactorComponent } from './doubleauthfactor.component';

describe('DoubleauthfactorComponent', () => {
  let component: DoubleauthfactorComponent;
  let fixture: ComponentFixture<DoubleauthfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleauthfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleauthfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
