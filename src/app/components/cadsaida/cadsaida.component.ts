
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaduserService } from '../../services/caduser.service';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { CadSaidaService } from '../../services/cadsaida.service';
import { CadDoacao } from '../../interfaces/caduser-response/caddoacao.interface';

@Component({
  selector: 'app-cadsaida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadsaida.component.html',
  styleUrl: './cadsaida.component.css'
})

export class CadsaidaComponent {

  CadSaidaForm: FormGroup = new FormGroup({
    descricao: new FormControl<string>('', [Validators.required]),
    valor: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _cadSaidaService = inject(CadSaidaService)
  private readonly _router = inject(Router)
  onCadSaida() {
    if (this.CadSaidaForm.valid) {
      const formData: CadDoacao = this.CadSaidaForm.value as CadDoacao; // Cast explícito para a interface
      this._cadSaidaService.create(formData).subscribe({
        next: (result) => {
          this._router.navigate(['saidas'])
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  saidas() {
    this._router.navigate(['usuarios'])
  }
}
