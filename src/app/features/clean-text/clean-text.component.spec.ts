import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTextComponent } from './clean-text.component';

describe('CleanTextComponent', () => {
  let component: CleanTextComponent;
  let fixture: ComponentFixture<CleanTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleanTextComponent]
    });
    fixture = TestBed.createComponent(CleanTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
