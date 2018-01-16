import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cars1componentComponent } from './cars1component.component';

describe('Cars1componentComponent', () => {
  let component: Cars1componentComponent;
  let fixture: ComponentFixture<Cars1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cars1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cars1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
