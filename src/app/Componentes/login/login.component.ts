import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {ApiService} from '../../helpers/api.service';
import {Persona} from 'src/app/Entidades/persona'
import { UserServiceService } from 'src/app/helpers/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario!: Persona;

  constructor(private apiService: ApiService,
     private userService: UserServiceService, 
     private ruteo: Router){
    this.usuario = new Persona;
  }

   ngOnInit(): void {
  }

  ingresar(rs: Persona[]){
    if(rs.length==0){
      alert("Error, usuario no valido");
    }else{
      this.userService.setPersona(rs[0]);
      this.ruteo.navigateByUrl('menu');
    }

  }

   loginUser(){
    this.apiService.Login(this.usuario).subscribe(
      datos => {
        this.ingresar(datos);}, err => alert(err.message)
      );
     //localStorage.setItem("usuario",this.usuario);
      }

}
