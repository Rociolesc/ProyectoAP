import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProyectoComponent } from './public-proyecto.component';

describe('PublicProyectoComponent', () => {
  let component: PublicProyectoComponent;
  let fixture: ComponentFixture<PublicProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
