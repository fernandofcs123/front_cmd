import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { authGuard } from './guards/auth.guards';
import { CaduserComponent } from './components/caduser/caduser.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { DiversosComponent } from './components/diversos/diversos.component';
import { SaidasComponent } from './components/saidas/saidas.component';
import { ExcluirDoadorComponent } from './components/excluir-doador/excluir-doador.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { EditDoacaoComponent } from './components/edit-doacao/edit-doacao.component';
import { EditSaidaComponent } from './components/edit-saida/edit-saida.component';
import { ExcluirEntradaComponent } from './components/excluir-entrada/excluir-entrada.component';
import { ExcluirSaidaComponent } from './components/excluir-saida/excluir-saida.component';
import { CadsaidaComponent } from './components/cadsaida/cadsaida.component';
import { ExcluirDiversosComponent } from './components/excluir-diversos/excluir-diversos.component';
import { EditDiversosComponent } from './components/edit-diversos/edit-diversos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},

    {path:'login', component: LoginComponent},

    {path:'usuarios', component: ListusersComponent, canActivate:[authGuard()]},

    {path:'novo-usuario', component: CaduserComponent, canActivate:[authGuard()]},

    {path: 'editar-usuario', component: EditUserComponent, canActivate:[authGuard()]},

    {path: 'nova-doacao', component: DoacaoComponent, canActivate:[authGuard()]},

    {path: 'entradas', component: EntradasComponent, canActivate:[authGuard()]},

    {path: 'diversos', component: DiversosComponent, canActivate:[authGuard()]},

    {path: 'saidas', component: SaidasComponent, canActivate:[authGuard()]},

    {path: 'excluir-doador', component: ExcluirDoadorComponent, canActivate:[authGuard()]},

    {path: 'historico', component: HistoricoComponent, canActivate:[authGuard()]},

    {path: 'edit-doacao', component: EditDoacaoComponent, canActivate: [authGuard()]},

    {path: 'edit-saida', component: EditSaidaComponent, canActivate: [authGuard()]},

    {path: 'excluir-entrada', component: ExcluirEntradaComponent, canActivate: [authGuard()]},

    {path: 'excluir-saida', component: ExcluirSaidaComponent, canActivate: [authGuard()]},

    {path: 'nova-saida', component: CadsaidaComponent, canActivate: [authGuard()]},

    {path: 'excluir-diversos', component: ExcluirDiversosComponent, canActivate: [authGuard()]},

    {path: 'edit-diversos', component: EditDiversosComponent, canActivate: [authGuard()]}
];
