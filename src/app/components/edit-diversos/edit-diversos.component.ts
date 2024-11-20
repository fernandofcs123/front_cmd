
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';
import { AltDoacaoService } from '../../services/editdoacao.service';
import { AltDoacaoDivService } from '../../services/editdoacaodiv.service';

@Component({
  selector: 'app-edit-diversos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-diversos.component.html',
  styleUrl: './edit-diversos.component.css'
})

export class EditDiversosComponent {
  AltDoacaoForm: FormGroup = new FormGroup({
    iddiversos: new FormControl<number>(0, [Validators.required]),
    iddoador: new FormControl<number>(0, [Validators.required]),
    descricao: new FormControl<string>('', [Validators.required]),
  });
  private readonly _altDoacaoDivService = inject(AltDoacaoDivService)
  private readonly _router = inject(Router)
  
  onAltDoacaoDiv() {
    if (this.AltDoacaoForm.valid) {
      const formData: AltDoacao = this.AltDoacaoForm.value as AltDoacao; // Cast explícito para a interface
      this._altDoacaoDivService.alterar(formData).subscribe({
        next: (result) => {
          this._router.navigate(['diversos'])
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
    this._router.navigate(['diversos'])
  }

  home(){
    this._router.navigate(['usuarios'])
  }
}

