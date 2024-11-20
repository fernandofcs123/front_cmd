import { AsyncPipe } from '@angular/common';
import { UsersList } from '../../types/users-list';
import { Component, inject, ViewChild } from '@angular/core';
import { ListusersService } from '../../services/listusers.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { EntradasList } from '../../types/entradas-list';
import { EntradasService } from '../../services/entradas.service';
import { SaidasService } from '../../services/saidas.service';
import { SaidasList } from '../../types/saidas-list';

@Component({
  selector: 'app-saidas',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './saidas.component.html',
  styleUrl: './saidas.component.css'
})
export class SaidasComponent {
  saidaList$: Observable<SaidasList> = of([])
  private _saidasService = inject(SaidasService)
  private _router = inject(Router)

  ngOnInit() {
    this.saidaList$ = this._saidasService.listsaidas()
    console.log(this.saidaList$)
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

  altSaida() {
    this._router.navigate(['edit-saida'])
  }
  
  excluirSaida() {
    this._router.navigate(['excluir-saida'])
  }
}

