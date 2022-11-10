import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEnergieRegionsComponent } from './type-energie-regions.component';

describe('TypeEnergieRegionsComponent', () => {
  let component: TypeEnergieRegionsComponent;
  let fixture: ComponentFixture<TypeEnergieRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeEnergieRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEnergieRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
