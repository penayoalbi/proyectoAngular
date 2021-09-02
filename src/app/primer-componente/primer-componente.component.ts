import { Component, OnInit } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  nombres:Array<Persona>;
  claseDocumento: string= 'blanco';
  colorPoyecto: string="azul";
  saludo:string ='hi';
  columnas:string[]=["Nombre","Apellido","tipo Documento","Documento"];

  constructor() { 
    //this.persona ={nombre:"azul", apellido: "lopez", tipoDocumento:["Documento Nacional de Identidad","Cédula de Identidad","Pasaporte"], documento:"12345678"};
  this.nombres=[{nombre:"Maria",apellido:"Franco",tipoDocumento:"dni", documento:"45123563"},
  {nombre:"Ana",apellido:"Caro",tipoDocumento:"CI",documento:"40125452"},
  {nombre:"Arias",apellido:"Stark",tipoDocumento:"dni",documento:"46123563"}];
  }
/*
  setNombre(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('nombre')).value;
    }
    this.persona.nombre = valor;
  }*/
/*
  setApellido(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('apellido')).value;
    }
    this.persona.apellido =valor;
  }*/

  mostrarTipoDocumento(){
    let tipo = (<HTMLInputElement>document.getElementById('optTipo')).value;
    alert(tipo);  
  }
/*
  setDocumento(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('documento')).value;
    }
    this.persona.documento =valor;
  }*/
 cambiarClase(valor: string){
  if(valor=='colorProyecto'){
    valor = (<HTMLInputElement>document.getElementById('btnCambiarColor')).value;
  }
 }
/*
 claseSaludo(valor: string){
  if(valor=='document'){
    valor=(<HTMLInputElement>document.getElementById('nombre')).value;
  } 
  alert("holaaa : "+valor);
 }*/
  ngOnInit(): void {
  }
}
