import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesrequestComponent } from './changesrequest.component';

describe('ChangesrequestComponent', () => {
  let component: ChangesrequestComponent;
  let fixture: ComponentFixture<ChangesrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
