import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBodyComponent } from './public-body.component';

describe('PublicBodyComponent', () => {
  let component: PublicBodyComponent;
  let fixture: ComponentFixture<PublicBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
