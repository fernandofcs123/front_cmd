import { AsyncPipe } from '@angular/common';
import { UsersList } from '../../types/users-list';
import { Component, inject, ViewChild } from '@angular/core';
import { ListusersService } from '../../services/listusers.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { EntradasList } from '../../types/entradas-list';
import { EntradasService } from '../../services/entradas.service';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css'
})
export class EntradasComponent {
  //  EntradasService
  entradaList$: Observable<EntradasList> = of([])
  private _entradasService = inject(EntradasService)
  private _router = inject(Router)

  ngOnInit() {
    this.entradaList$ = this._entradasService.listentradas()
    console.log(this.entradaList$)
  }
  cadUser() {
    this._router.navigate(['novo-usuario'])
  }
  
  editUser() {
    this._router.navigate(['editar-usuario'])
  }

  novaDoacao () {
    this._router.navigate(['nova-doacao'])
  }

  home() {
    this._router.navigate(['usuarios'])
  }

  editDoacao(){
    this._router.navigate(['edit-doacao'])
  }

  excluirEntrada() {
    this._router.navigate(['excluir-entrada'])
  }
  
}
