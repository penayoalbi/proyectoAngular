import { Component, OnInit } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  //nombre: String = '';
  //apellido: String = '';
  //color: String = '';
  persona: Persona;
  claseDocumento: string= 'blanco';
  saludo:string ='hi';

  constructor() { 
    this.persona ={nombre:"azul", apellido: "lopez", tipoDocumento:["Documento Nacional de Identidad","Cédula de Identidad","Pasaporte"], documento:"12345678"};
  }

  setNombre(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('nombre')).value;
    }
    this.persona.nombre = valor;
  }

  setApellido(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('apellido')).value;
    }
    this.persona.apellido =valor;
  }

  mostrarTipoDocumento(){
    let tipo = (<HTMLInputElement>document.getElementById('optTipo')).value;
    alert(tipo);  
  }

  setDocumento(valor: string){
    if(valor=='document'){
      valor = (<HTMLInputElement>document.getElementById('documento')).value;
    }
    this.persona.documento =valor;
  }
 cambiarClase(){
    this.claseDocumento='azul';
 }

 claseSaludo(valor: string){
  if(valor=='document'){
    valor=(<HTMLInputElement>document.getElementById('nombre')).value;
  } 
  alert("holaaa : "+valor);
 }
  ngOnInit(): void {
  }
}
