import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBodyComponent } from './front-body.component';

describe('FrontBodyComponent', () => {
  let component: FrontBodyComponent;
  let fixture: ComponentFixture<FrontBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
