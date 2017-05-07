import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutepanelComponent } from './routepanel.component';

describe('RoutepanelComponent', () => {
  let component: RoutepanelComponent;
  let fixture: ComponentFixture<RoutepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
