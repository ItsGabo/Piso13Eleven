import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineconsultingComponent } from './onlineconsulting.component';

describe('OnlineconsultingComponent', () => {
  let component: OnlineconsultingComponent;
  let fixture: ComponentFixture<OnlineconsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineconsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineconsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
