import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoEnergieRegionsComponent } from './conso-energie-regions.component';

describe('ConsoEnergieRegionsComponent', () => {
  let component: ConsoEnergieRegionsComponent;
  let fixture: ComponentFixture<ConsoEnergieRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoEnergieRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoEnergieRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
