import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { AltuserService } from '../../services/edituser.service';
import { ExcluirDoadorService } from '../../services/excluirdoador.service';
import { ExcluirEntradaService } from '../../services/excluirentrada.service';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';

@Component({
  selector: 'app-excluir-entrada',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './excluir-entrada.component.html',
  styleUrl: './excluir-entrada.component.css'
})

export class ExcluirEntradaComponent {
  AltUserForm: FormGroup = new FormGroup({
    identrada: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _delentradaService = inject(ExcluirEntradaService)
  private readonly _router = inject(Router)

  onDelEntrada() {
    if (this.AltUserForm.valid) {
      const formData: AltDoacao = this.AltUserForm.value as AltDoacao; // Cast explícito para a interface
      this._delentradaService.deleteEntrada(formData).subscribe({
        next: (result) => {
          this._router.navigate(['entradas'])
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
    this._router.navigate(['usuarios'])
  }
}


