import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { ValidadorGuard } from './helpers/validador.guard';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { RecuperarPasswordComponent } from './Componentes/recuperar-password/recuperar-password.component';
import { MenuComponent } from './Componentes/menu/menu.component';

const routes: Routes = [
  {path:'formulario',component: FormularioComponent, canActivate:[ValidadorGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperar', component: RecuperarPasswordComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'menu', component: MenuComponent},
  {path:'**', component: NoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
