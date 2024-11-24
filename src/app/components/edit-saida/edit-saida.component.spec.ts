import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaidaComponent } from './edit-saida.component';

describe('EditSaidaComponent', () => {
  let component: EditSaidaComponent;
  let fixture: ComponentFixture<EditSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
