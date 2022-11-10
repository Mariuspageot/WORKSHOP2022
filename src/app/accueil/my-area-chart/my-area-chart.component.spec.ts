import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAreaChartComponent } from './my-area-chart.component';

describe('MyAreaChartComponent', () => {
  let component: MyAreaChartComponent;
  let fixture: ComponentFixture<MyAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAreaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
