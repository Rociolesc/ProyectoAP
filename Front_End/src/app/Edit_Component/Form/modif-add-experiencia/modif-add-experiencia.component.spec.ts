import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAddExperienciaComponent } from './modif-add-experiencia.component';

describe('ModifAddExperienciaComponent', () => {
  let component: ModifAddExperienciaComponent;
  let fixture: ComponentFixture<ModifAddExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAddExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAddExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
