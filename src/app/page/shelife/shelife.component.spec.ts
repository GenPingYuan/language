import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelifeComponent } from './shelife.component';

describe('ShelifeComponent', () => {
  let component: ShelifeComponent;
  let fixture: ComponentFixture<ShelifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
