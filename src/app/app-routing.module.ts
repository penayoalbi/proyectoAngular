import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { ValidadorGuard } from './helpers/validador.guard';
import { FormularioComponent } from './Componentes/formulario/formulario.component';

const routes: Routes = [
  {path:'formulario',component: FormularioComponent, canActivate:[ValidadorGuard]},
  {path: '', component: LoginComponent},
  {path:'**', component: NoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
