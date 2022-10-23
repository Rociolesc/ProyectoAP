import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPerfilComponent } from './public-perfil.component';

describe('PublicPerfilComponent', () => {
  let component: PublicPerfilComponent;
  let fixture: ComponentFixture<PublicPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
