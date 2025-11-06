import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosDestacadosComponent } from './vehiculos-destacados.component';

describe('VehiculosDestacadosComponent', () => {
  let component: VehiculosDestacadosComponent;
  let fixture: ComponentFixture<VehiculosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosDestacadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
