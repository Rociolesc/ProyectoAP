import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicExperienciaComponent } from './public-experiencia.component';

describe('PublicExperienciaComponent', () => {
  let component: PublicExperienciaComponent;
  let fixture: ComponentFixture<PublicExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
