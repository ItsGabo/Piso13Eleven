import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedotheremailComponent } from './needotheremail.component';

describe('NeedotheremailComponent', () => {
  let component: NeedotheremailComponent;
  let fixture: ComponentFixture<NeedotheremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedotheremailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedotheremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
