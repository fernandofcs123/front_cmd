import { Component, inject, ViewChild } from '@angular/core';
import { ListusersService } from '../../services/listusers.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersList } from '../../types/users-list';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { EntradasList } from '../../types/entradas-list';
import { ExcluirDoadorService } from '../../services/excluirdoador.service';

@Component({
  selector: 'app-listusers',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './listusers.component.html',
  styleUrl: './listusers.component.css'
})
export class ListusersComponent {
  
  userList$: Observable<UsersList> = of([])
  private _listuserService = inject(ListusersService)
  // private _excluirdoadorService = inject(ExcluirDoadorService)
  private _router = inject(Router)

  ngOnInit() {
    this.userList$ = this._listuserService.listusers()
    console.log(this.userList$)
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

  entradas() {
    this._router.navigate(['entradas'])
  }

  diversos() {
    this._router.navigate(['diversos'])
  }

  saidas() {
    this._router.navigate(['saidas'])

  }

  excluirDoador() {
    this._router.navigate(['excluir-doador'])
  }

  historico() {
    this._router.navigate(['historico'])
  }
  
  registrarSaida() {
    this._router.navigate(['nova-saida'])
  }
}
