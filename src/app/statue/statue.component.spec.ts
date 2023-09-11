import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatueComponent } from './statue.component';

describe('StatueComponent', () => {
  let component: StatueComponent;
  let fixture: ComponentFixture<StatueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatueComponent]
    });
    fixture = TestBed.createComponent(StatueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
