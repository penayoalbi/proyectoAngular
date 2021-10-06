import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Entidades/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombres:Array<Persona>;
  claseDocumento: string= 'blanco';
  colorPoyecto: string="azul";
  saludo:string ='hi';
  columnas:string[]=["Nombre","Apellido","tipo Documento","Documento"];
  Mmodificar: boolean=false;

  constructor() { 
      //this.persona ={nombre:"azul", apellido: "lopez", tipoDocumento:["Documento Nacional de Identidad","Cédula de Identidad","Pasaporte"], documento:"12345678"};
    this.nombres=[{id:1,nombre:"Maria",apellido:"Franco",tipoDocumento:"dni", documento:"45123563"},
    {id:2,nombre:"Ana",apellido:"Caro",tipoDocumento:"CI",documento:"40125452"},
    {id:3,nombre:"Arias",apellido:"Stark",tipoDocumento:"dni",documento:"46123563"}];
  }

  mostrarTipoDocumento(){
    let tipo = (<HTMLInputElement>document.getElementById('optTipo')).value;
    alert(tipo);
  } 

  cambiarClase(valor: string){
    if(valor=='colorProyecto'){
      valor = (<HTMLInputElement>document.getElementById('btnCambiarColor')).value;
    }
  }

  ngOnInit(): void {
  }
  
  modificar(item:number|undefined){
    let modif=item;
  }

}
