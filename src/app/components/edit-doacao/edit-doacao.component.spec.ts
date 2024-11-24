import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoacaoComponent } from './edit-doacao.component';

describe('EditDoacaoComponent', () => {
  let component: EditDoacaoComponent;
  let fixture: ComponentFixture<EditDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDoacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
