import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    LoginComponent,
    MenuComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
