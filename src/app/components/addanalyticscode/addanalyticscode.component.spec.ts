import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanalyticscodeComponent } from './addanalyticscode.component';

describe('AddanalyticscodeComponent', () => {
  let component: AddanalyticscodeComponent;
  let fixture: ComponentFixture<AddanalyticscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddanalyticscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanalyticscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
