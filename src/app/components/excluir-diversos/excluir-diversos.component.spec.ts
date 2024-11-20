import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDiversosComponent } from './excluir-diversos.component';

describe('ExcluirDiversosComponent', () => {
  let component: ExcluirDiversosComponent;
  let fixture: ComponentFixture<ExcluirDiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirDiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirDiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
