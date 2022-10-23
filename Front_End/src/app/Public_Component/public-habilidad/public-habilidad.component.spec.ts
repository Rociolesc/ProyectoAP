import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHabilidadComponent } from './public-habilidad.component';

describe('PublicHabilidadComponent', () => {
  let component: PublicHabilidadComponent;
  let fixture: ComponentFixture<PublicHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
