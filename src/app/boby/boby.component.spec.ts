import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobyComponent } from './boby.component';

describe('BobyComponent', () => {
  let component: BobyComponent;
  let fixture: ComponentFixture<BobyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
