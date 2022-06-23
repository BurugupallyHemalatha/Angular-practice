import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { AuComponent } from './au.component';

describe('AuComponent', () => {
  let component: AuComponent;
  let fixture: ComponentFixture<AuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
