import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoInputComponent } from './topico-input.component';

describe('TopicoInputComponent', () => {
  let component: TopicoInputComponent;
  let fixture: ComponentFixture<TopicoInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicoInputComponent]
    });
    fixture = TestBed.createComponent(TopicoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
