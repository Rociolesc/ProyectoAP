import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormacionComponent } from './edit-formacion.component';

describe('EditFormacionComponent', () => {
  let component: EditFormacionComponent;
  let fixture: ComponentFixture<EditFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
