import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDoadorComponent } from './excluir-doador.component';

describe('ExcluirDoadorComponent', () => {
  let component: ExcluirDoadorComponent;
  let fixture: ComponentFixture<ExcluirDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirDoadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
