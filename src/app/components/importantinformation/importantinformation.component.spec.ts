import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantinformationComponent } from './importantinformation.component';

describe('ImportantinformationComponent', () => {
  let component: ImportantinformationComponent;
  let fixture: ComponentFixture<ImportantinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
