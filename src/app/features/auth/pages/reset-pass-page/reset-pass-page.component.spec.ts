import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassPageComponent } from './reset-pass-page.component';

describe('ResetPassPageComponent', () => {
  let component: ResetPassPageComponent;
  let fixture: ComponentFixture<ResetPassPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPassPageComponent]
    });
    fixture = TestBed.createComponent(ResetPassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
