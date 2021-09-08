import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './Componentes/app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NoEncontradoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
