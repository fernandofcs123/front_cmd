import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcluirEntradaService } from '../../services/excluirentrada.service';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';
import { ExcluirSaidaService } from '../../services/excluirsaida.service';

@Component({
  selector: 'app-excluir-saida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './excluir-saida.component.html',
  styleUrl: './excluir-saida.component.css'
})

export class ExcluirSaidaComponent {
  AltUserForm: FormGroup = new FormGroup({
    idsaida: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _delentradaService = inject(ExcluirSaidaService)
  private readonly _router = inject(Router)

  onDelSaida() {
    if (this.AltUserForm.valid) {
      const formData: AltDoacao = this.AltUserForm.value as AltDoacao; // Cast explícito para a interface
      this._delentradaService.deleteSaida(formData).subscribe({
        next: (result) => {
          this._router.navigate(['saidas'])
        },
        error: (err) => {
          console.error('Erro ao editar usuário:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  cancelAltUser() {
    this._router.navigate(['saidas'])
  }
}


