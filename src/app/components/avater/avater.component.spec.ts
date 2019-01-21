import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaterComponent } from './avater.component';

describe('AvaterComponent', () => {
  let component: AvaterComponent;
  let fixture: ComponentFixture<AvaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
