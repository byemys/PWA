import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCitaComponent } from './mostrar-cita.component';

describe('MostrarCitaComponent', () => {
  let component: MostrarCitaComponent;
  let fixture: ComponentFixture<MostrarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCitaComponent]
    });
    fixture = TestBed.createComponent(MostrarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
