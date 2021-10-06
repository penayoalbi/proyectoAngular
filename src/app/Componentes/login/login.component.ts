import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string;

  constructor(){
    this.usuario='';
  }

  //constructor(private ruteo: Router) {
   // this.usuario='';
   // if(localStorage.getItem("usuario") == "admin"){
    //  this.ruteo.navigate(["/formulario"]);
   // }
  // }

   ngOnInit(): void {
  }
   entrar(){
     localStorage.setItem("usuario",this.usuario);
     console.log(this.usuario);
  }

}
