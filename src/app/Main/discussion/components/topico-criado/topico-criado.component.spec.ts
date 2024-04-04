import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoCriadoComponent } from './topico-criado.component';

describe('TopicoCriadoComponent', () => {
  let component: TopicoCriadoComponent;
  let fixture: ComponentFixture<TopicoCriadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicoCriadoComponent]
    });
    fixture = TestBed.createComponent(TopicoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
