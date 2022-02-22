import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteidentityComponent } from './siteidentity.component';

describe('SiteidentityComponent', () => {
  let component: SiteidentityComponent;
  let fixture: ComponentFixture<SiteidentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteidentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteidentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
