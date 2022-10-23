import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAddHabilidadComponent } from './modif-add-habilidad.component';

describe('ModifAddHabilidadComponent', () => {
  let component: ModifAddHabilidadComponent;
  let fixture: ComponentFixture<ModifAddHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAddHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAddHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
