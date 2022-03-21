import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredmailsComponent } from './registeredmails.component';

describe('RegisteredmailsComponent', () => {
  let component: RegisteredmailsComponent;
  let fixture: ComponentFixture<RegisteredmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
