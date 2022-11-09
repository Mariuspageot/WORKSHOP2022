import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDiagramme1Component } from './region-diagramme1.component';

describe('RegionDiagramme1Component', () => {
  let component: RegionDiagramme1Component;
  let fixture: ComponentFixture<RegionDiagramme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDiagramme1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDiagramme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
