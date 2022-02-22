import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostfinishComponent } from './almostfinish.component';

describe('AlmostfinishComponent', () => {
  let component: AlmostfinishComponent;
  let fixture: ComponentFixture<AlmostfinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmostfinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmostfinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
