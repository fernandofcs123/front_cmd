import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaduserService } from '../../services/caduser.service';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { CadDoacao } from '../../interfaces/caduser-response/caddoacao.interface';
import { CaddoacaoService } from '../../services/caddoacao.service';
import { CaddoacaodivService } from '../../services/caddoacaodiv.service';

@Component({
  selector: 'app-doacao',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './doacao.component.html',
  styleUrl: './doacao.component.css'
})
export class DoacaoComponent {
  CadDoacaoDivForm: FormGroup = new FormGroup({
    iddoador: new FormControl<number>(0, [Validators.required]),
    descricao: new FormControl<string>('', [Validators.required]),
  });
  CadDoacaoForm: FormGroup = new FormGroup({
    iddoador: new FormControl<number>(0, [Validators.required]),
    valor: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _cadDoacaoService = inject(CaddoacaoService)
  private readonly _cadDoacaoDivService = inject(CaddoacaodivService)

  private readonly _router = inject(Router)
  onCadDoacao() {
    if (this.CadDoacaoForm.valid) {
      const formData: CadDoacao = this.CadDoacaoForm.value as CadDoacao; // Cast explícito para a interface
      this._cadDoacaoService.create(formData).subscribe({
        next: (result) => {
          this._router.navigate(['usuarios'])
        },
        error: (err) => {
          console.error('Erro ao cadastrar doacao:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  onCadDoacaoDiv() {
    if (this.CadDoacaoDivForm.valid) {
      const formData: CadDoacao = this.CadDoacaoDivForm.value as CadDoacao; // Cast explícito para a interface
      this._cadDoacaoDivService.create(formData).subscribe({
        next: (result) => {
          this._router.navigate(['usuarios'])
        },
        error: (err) => {
          console.error('Erro ao cadastrar doacao:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  home(){
    this._router.navigate(['usuarios'])
  }

}
