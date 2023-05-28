import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCasaComponent } from './pagina-casa.component';

describe('PaginaCasaComponent', () => {
  let component: PaginaCasaComponent;
  let fixture: ComponentFixture<PaginaCasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCasaComponent]
    });
    fixture = TestBed.createComponent(PaginaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
