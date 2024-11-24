import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntradasList } from '../../types/entradas-list';
import { EntradasService } from '../../services/entradas.service';
import { DiversosList } from '../../types/diversos-list';
import { DiversosService } from '../../services/diversos.service';

@Component({
  selector: 'app-diversos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './diversos.component.html',
  styleUrl: './diversos.component.css'
})
export class DiversosComponent {
  diversosList$: Observable<DiversosList> = of([])
  private _entradasService = inject(DiversosService)
  private _router = inject(Router)

  ngOnInit() {
    this.diversosList$ = this._entradasService.listdiversos()
    console.log(this.diversosList$)
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

  excluirDiversos() {
    this._router.navigate(['excluir-diversos'])
  }
  
  editDiversos() {
    this._router.navigate(['edit-diversos'])
  }
}
