import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAddFormacionComponent } from './modif-add-formacion.component';

describe('ModifAddFormacionComponent', () => {
  let component: ModifAddFormacionComponent;
  let fixture: ComponentFixture<ModifAddFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAddFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAddFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
