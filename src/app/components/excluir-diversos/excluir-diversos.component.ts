import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcluirEntradaService } from '../../services/excluirentrada.service';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';
import { ExcluirDiversosService } from '../../services/excluirdiversos.service';

@Component({
  selector: 'app-excluir-diversos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './excluir-diversos.component.html',
  styleUrl: './excluir-diversos.component.css'
})

export class ExcluirDiversosComponent {
  AltUserForm: FormGroup = new FormGroup({
    iddiversos: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _deldiversosService = inject(ExcluirDiversosService)
  private readonly _router = inject(Router)

  onDelDiversos() {
    if (this.AltUserForm.valid) {
      const formData: AltDoacao = this.AltUserForm.value as AltDoacao; // Cast explícito para a interface
      this._deldiversosService.deleteDiversos(formData).subscribe({
        next: (result) => {
          this._router.navigate(['entradas'])
        },
        error: (err) => {
          console.error('Erro ao excluir diversos:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  voltar() {
    this._router.navigate(['diversos'])
  }
}


