import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaduserService } from '../../services/caduser.service';
import { CadUser } from '../../interfaces/caduser-response/caduser.interface';

@Component({
  selector: 'app-caduser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './caduser.component.html',
  styleUrl: './caduser.component.css'
})
export class CaduserComponent {

  CadUserForm: FormGroup = new FormGroup({
    nome: new FormControl<string>('', [Validators.required]),
    telefone: new FormControl<string>('', [Validators.required]),
  });
  private readonly _cadUserService = inject(CaduserService)
  private readonly _router = inject(Router)
  onCadUser() {
    if (this.CadUserForm.valid) {
      const formData: CadUser = this.CadUserForm.value as CadUser; // Cast explícito para a interface
      this._cadUserService.create(formData).subscribe({
        next: (result) => {
          this._router.navigate(['usuarios'])
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err);
        },
      });
    } else {
      console.error('Formulário inválido');
    }
  }
  cancelCadUser() {
    this._router.navigate(['usuarios'])
  }
}
