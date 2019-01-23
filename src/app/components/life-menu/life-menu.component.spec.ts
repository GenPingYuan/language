import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeMenuComponent } from './life-menu.component';

describe('LifeMenuComponent', () => {
  let component: LifeMenuComponent;
  let fixture: ComponentFixture<LifeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
