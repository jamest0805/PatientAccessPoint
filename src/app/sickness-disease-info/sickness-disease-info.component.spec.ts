import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicknessDiseaseInfoComponent } from './sickness-disease-info.component';

describe('SicknessDiseaseInfoComponent', () => {
  let component: SicknessDiseaseInfoComponent;
  let fixture: ComponentFixture<SicknessDiseaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicknessDiseaseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SicknessDiseaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
