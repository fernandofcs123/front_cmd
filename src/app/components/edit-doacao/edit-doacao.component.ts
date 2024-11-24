import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { AltuserService } from '../../services/edituser.service';
import { CadDoacao } from '../../interfaces/caduser-response/caddoacao.interface';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';
import { AltDoacaoService } from '../../services/editdoacao.service';

@Component({
  selector: 'app-edit-doacao',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-doacao.component.html',
  styleUrl: './edit-doacao.component.css'
})

export class EditDoacaoComponent {
  AltDoacaoForm: FormGroup = new FormGroup({
    identrada: new FormControl<number>(0, [Validators.required]),
    iddoador: new FormControl<number>(0, [Validators.required]),
    valor: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _altDoacaoService = inject(AltDoacaoService)
  private readonly _router = inject(Router)
  onAltDoacao() {
    if (this.AltDoacaoForm.valid) {
      const formData: AltDoacao = this.AltDoacaoForm.value as AltDoacao; // Cast explícito para a interface
      this._altDoacaoService.alterar(formData).subscribe({
        next: (result) => {
          this._router.navigate(['entradas'])
        },
        error: (err) => {
          console.error('Erro ao editar doacao:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  voltar() {
    this._router.navigate(['entradas'])
  }

  home(){
    this._router.navigate(['usuarios'])
  }
}

