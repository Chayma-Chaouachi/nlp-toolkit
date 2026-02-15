import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillPunctuationComponent } from './kill-punctuation.component';

describe('KillPunctuationComponent', () => {
  let component: KillPunctuationComponent;
  let fixture: ComponentFixture<KillPunctuationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KillPunctuationComponent]
    });
    fixture = TestBed.createComponent(KillPunctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
