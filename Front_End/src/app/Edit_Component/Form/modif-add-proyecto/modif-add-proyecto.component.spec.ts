import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAddProyectoComponent } from './modif-add-proyecto.component';

describe('ModifAddProyectoComponent', () => {
  let component: ModifAddProyectoComponent;
  let fixture: ComponentFixture<ModifAddProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAddProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAddProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
