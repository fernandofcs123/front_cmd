import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';
import { AltuserService } from '../../services/edituser.service';


@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  AltUserForm: FormGroup = new FormGroup({
    iddoador: new FormControl<number>(0, [Validators.required]),
    nome: new FormControl<string>('', [Validators.required]),
    telefone: new FormControl<string>('', [Validators.required]),
  });
  private readonly _AltuserService = inject(AltuserService)
  private readonly _router = inject(Router)
  onAltUser() {
    if (this.AltUserForm.valid) {
      const formData: CadUser = this.AltUserForm.value as CadUser; // Cast explícito para a interface
      this._AltuserService.alterar(formData).subscribe({
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

