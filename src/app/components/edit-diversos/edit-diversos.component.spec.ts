import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiversosComponent } from './edit-diversos.component';

describe('EditDiversosComponent', () => {
  let component: EditDiversosComponent;
  let fixture: ComponentFixture<EditDiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
