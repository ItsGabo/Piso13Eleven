import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptioncancelComponent } from './subscriptioncancel.component';

describe('SubscriptioncancelComponent', () => {
  let component: SubscriptioncancelComponent;
  let fixture: ComponentFixture<SubscriptioncancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptioncancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptioncancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
