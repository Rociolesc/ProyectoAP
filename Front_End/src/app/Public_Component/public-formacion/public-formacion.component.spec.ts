import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFormacionComponent } from './public-formacion.component';

describe('PublicFormacionComponent', () => {
  let component: PublicFormacionComponent;
  let fixture: ComponentFixture<PublicFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
