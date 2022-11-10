import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDiagramme2Component } from './region-diagramme2.component';

describe('RegionDiagramme2Component', () => {
  let component: RegionDiagramme2Component;
  let fixture: ComponentFixture<RegionDiagramme2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDiagramme2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDiagramme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
