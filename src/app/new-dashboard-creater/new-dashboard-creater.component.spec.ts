import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashboardCreaterComponent } from './new-dashboard-creater.component';

describe('NewDashboardCreaterComponent', () => {
  let component: NewDashboardCreaterComponent;
  let fixture: ComponentFixture<NewDashboardCreaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDashboardCreaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDashboardCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
