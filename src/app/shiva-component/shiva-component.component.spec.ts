import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivaComponentComponent } from './shiva-component.component';

describe('ShivaComponentComponent', () => {
  let component: ShivaComponentComponent;
  let fixture: ComponentFixture<ShivaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShivaComponentComponent]
    });
    fixture = TestBed.createComponent(ShivaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
