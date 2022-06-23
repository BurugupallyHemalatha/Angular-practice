import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { JntuComponent } from './jntu.component';

describe('JntuComponent', () => {
  let component: JntuComponent;
  let fixture: ComponentFixture<JntuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JntuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JntuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
