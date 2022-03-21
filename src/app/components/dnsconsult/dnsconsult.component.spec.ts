import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsconsultComponent } from './dnsconsult.component';

describe('DnsconsultComponent', () => {
  let component: DnsconsultComponent;
  let fixture: ComponentFixture<DnsconsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnsconsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
