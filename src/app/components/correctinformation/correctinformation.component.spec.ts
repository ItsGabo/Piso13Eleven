import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectinformationComponent } from './correctinformation.component';

describe('CorrectinformationComponent', () => {
  let component: CorrectinformationComponent;
  let fixture: ComponentFixture<CorrectinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
