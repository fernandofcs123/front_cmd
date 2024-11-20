
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltDoacao } from '../../interfaces/caduser-response/altdoacao.interface';
import { AltDoacaoService } from '../../services/editdoacao.service';
import { AltSaidaService } from '../../services/editsaida.service';
import { AltSaida } from '../../interfaces/caduser-response/altsaida.interface';

@Component({
  selector: 'app-edit-saida',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-saida.component.html',
  styleUrl: './edit-saida.component.css'
})

export class EditSaidaComponent {
  AltSaidaForm: FormGroup = new FormGroup({
    idsaida: new FormControl<number>(0, [Validators.required]),
    descricao: new FormControl<string>('', [Validators.required]),
    valor: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _altSaidaService = inject(AltSaidaService)
  private readonly _router = inject(Router)
  onAltSaida() {
    if (this.AltSaidaForm.valid) {
      const formData: AltSaida = this.AltSaidaForm.value as AltSaida; // Cast explícito para a interface
      this._altSaidaService.alterar(formData).subscribe({
        next: (result) => {
          this._router.navigate(['saidas'])
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
    this._router.navigate(['saidas'])
  }

  home(){
    this._router.navigate(['usuarios'])
  }
}

