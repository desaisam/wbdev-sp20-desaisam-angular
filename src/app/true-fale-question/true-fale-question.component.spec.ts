import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFaleQuestionComponent } from './true-fale-question.component';

describe('TrueFaleQuestionComponent', () => {
  let component: TrueFaleQuestionComponent;
  let fixture: ComponentFixture<TrueFaleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFaleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFaleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
