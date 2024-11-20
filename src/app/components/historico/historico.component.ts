import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntradasList } from '../../types/entradas-list';
import { EntradasService } from '../../services/entradas.service';
import { HistoricoList } from '../../types/historico-list';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css'
})

export class HistoricoComponent {
  //  EntradasService
  historicoList$: Observable<HistoricoList> = of([])
  private _historicoService = inject(HistoricoService)
  private _router = inject(Router)

  ngOnInit() {
    this.historicoList$ = this._historicoService.listhistorico()
    console.log(this.historicoList$)
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

  
}
