import { Injectable } from '@angular/core';
import { Persona } from '../Entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usuario!: Persona;

  constructor() { }
  setPersona(usuario: Persona){
    this.usuario = usuario;
  }
  getPersona(){
    return this.usuario;
  }
}
