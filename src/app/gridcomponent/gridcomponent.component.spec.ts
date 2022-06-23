import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcomponentComponent } from './gridcomponent.component';

describe('GridcomponentComponent', () => {
  let component: GridcomponentComponent;
  let fixture: ComponentFixture<GridcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
