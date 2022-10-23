import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAddPerfilComponent } from './modif-add-perfil.component';

describe('ModifAddPerfilComponent', () => {
  let component: ModifAddPerfilComponent;
  let fixture: ComponentFixture<ModifAddPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAddPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAddPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
