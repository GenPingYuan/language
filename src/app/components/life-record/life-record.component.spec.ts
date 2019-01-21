import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeRecordComponent } from './life-record.component';

describe('LifeRecordComponent', () => {
  let component: LifeRecordComponent;
  let fixture: ComponentFixture<LifeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
