import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { AltuserService } from '../../services/edituser.service';
import { ExcluirDoadorService } from '../../services/excluirdoador.service';

@Component({
  selector: 'app-excluir-doador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './excluir-doador.component.html',
  styleUrl: './excluir-doador.component.css'
})
export class ExcluirDoadorComponent {
  AltUserForm: FormGroup = new FormGroup({
    iddoador: new FormControl<number>(0, [Validators.required]),
  });
  private readonly _deluserService = inject(ExcluirDoadorService)
  private readonly _router = inject(Router)

  onDelUser() {
    if (this.AltUserForm.valid) {
      const formData: CadUser = this.AltUserForm.value as CadUser; // Cast explícito para a interface
      this._deluserService.deleteuser(formData).subscribe({
        next: (result) => {
          this._router.navigate(['usuarios'])
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


