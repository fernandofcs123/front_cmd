import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirSaidaComponent } from './excluir-saida.component';

describe('ExcluirSaidaComponent', () => {
  let component: ExcluirSaidaComponent;
  let fixture: ComponentFixture<ExcluirSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirSaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
