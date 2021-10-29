import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './Componentes/app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FondoDirective } from './fondo.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule} from '@angular/material/input';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { RecuperarPasswordComponent } from './Componentes/recuperar-password/recuperar-password.component';
import { MatIconModule} from '@angular/material/icon';
import  {ToastrModule  }  from  'ngx-toastr' ;
import { ApiService} from './helpers/api.service';
import { ProductoComponent } from './Componentes/producto/producto.component';
//import { MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NoEncontradoComponent,
    FormularioComponent,
    FondoDirective,
    RegistrarseComponent,
    RecuperarPasswordComponent,
    ProductoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatIconModule
    //MatSelectModule
  ],
  providers: [HttpClient],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
