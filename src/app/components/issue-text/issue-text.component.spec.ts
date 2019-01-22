import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTextComponent } from './issue-text.component';

describe('IssueTextComponent', () => {
  let component: IssueTextComponent;
  let fixture: ComponentFixture<IssueTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
