import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenpaswordComponent } from './forgottenpasword.component';

describe('ForgottenpaswordComponent', () => {
  let component: ForgottenpaswordComponent;
  let fixture: ComponentFixture<ForgottenpaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgottenpaswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
