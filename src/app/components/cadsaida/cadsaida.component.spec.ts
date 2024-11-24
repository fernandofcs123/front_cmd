import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsaidaComponent } from './cadsaida.component';

describe('CadsaidaComponent', () => {
  let component: CadsaidaComponent;
  let fixture: ComponentFixture<CadsaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadsaidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadsaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
